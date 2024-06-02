import { useForm } from "react-hook-form";
import { useStage } from "../../../contexts/stage/useStage";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../constants/signUpSchema";
import { graphql } from "@/gql";
import { useMutation } from "@urql/next";
import { toast } from "sonner";

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

  const [signUpMutationResult, signUpMutation] = useMutation(SignUpMutation);

  const goToSignIn = () => setStage("signIn");
  const onSubmit = signUpForm.handleSubmit(async (data) => {
    const { passwordConfirmation, ...values } = signUpForm.getValues();
    console.log(values, "values");
    await signUpMutation({ ...values });
    toast.success("User created successfully, check your email to verify.");
    goToSignIn();
  });
  const isPasswordEqueal =
    signUpForm.watch("password") === signUpForm.watch("passwordConfirmation");

  return {
    state: {
      isLoading: signUpMutationResult.fetching,
      isPasswordEqueal,
    },
    form: signUpForm,
    functions: {
      onSubmit,
      goToSignIn,
    },
  };
};
