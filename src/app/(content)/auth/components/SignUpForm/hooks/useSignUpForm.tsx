"use client";
import { useForm } from "react-hook-form";
import { useStage } from "../../../contexts/stage/useStage";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../constants/signUpSchema";
import { toast } from "sonner";
import { useSignUpMutation } from "./useSignUpMutation";

interface SignUpForm {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const useSignUpForm = () => {
  const { setStage } = useStage();

  const signUpForm = useForm<SignUpForm>({
    defaultValues: {},
    resolver: zodResolver(signUpSchema),
  });

  const signIpUserMutation = useSignUpMutation();

  const goToSignIn = () => setStage("signIn");
  const onSubmit = signUpForm.handleSubmit(async (data) => {
    const { passwordConfirmation, ...values } = signUpForm.getValues();

    await signIpUserMutation.mutate({ ...values });
    toast.success("User created successfully, check your email to verify.");
    goToSignIn();
  });
  const isPasswordEqueal =
    signUpForm.watch("password") === signUpForm.watch("passwordConfirmation");

  return {
    state: {
      isLoading: signIpUserMutation.isPending,
      isPasswordEqueal,
    },
    form: signUpForm,
    functions: {
      onSubmit,
      goToSignIn,
    },
  };
};
