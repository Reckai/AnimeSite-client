'use client'
import { useForm } from "react-hook-form";
import { useStage } from "../../../contexts/stage/useStage";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../constants/signUpSchema";
import { graphql } from "@/gql";
import { toast } from "sonner";
import {useMutation} from "@tanstack/react-query";

interface SignUpForm {
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SignUpMutation = graphql(`
  mutation SignupUser($password: String!, $email: String!) {
    signupUser(password: $password, email: $email)
  }
`);

export const useSignUpForm = () => {
  const { setStage } = useStage();

  const signUpForm = useForm<SignUpForm>({
    defaultValues: {},
    resolver: zodResolver(signUpSchema),
  });

  const mutation = useMutation({
    mutationFn: async(data)=>{

      return setTimeout(()=> 's','200')
    }
  });

  const goToSignIn = () => setStage("signIn");
  const onSubmit = signUpForm.handleSubmit(async (data) => {
    const { passwordConfirmation, ...values } = signUpForm.getValues();
    console.log(values, "values");
    await mutation.mutate({ ...values });
    toast.success("User created successfully, check your email to verify.");
    goToSignIn();
  });
  const isPasswordEqueal =
    signUpForm.watch("password") === signUpForm.watch("passwordConfirmation");

  return {
    state: {
      isLoading: mutation.isPending,
      isPasswordEqueal,
    },
    form: signUpForm,
    functions: {
      onSubmit,
      goToSignIn,
    },
  };
};
