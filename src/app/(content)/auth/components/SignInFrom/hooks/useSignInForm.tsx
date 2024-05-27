"use client";
import { useForm } from "react-hook-form";
import { signInLoginSchema } from "../constants/signInSchema";
import { loginUserMutation } from "./useLoginUserMutation";
import { useStage } from "../../../contexts/stage/useStage";
import { zodResolver } from "@hookform/resolvers/zod";
interface SignInForm {
  email: string;
  password: string;
}

export const useSignInForm = () => {
  const { setStage } = useStage();

  const signInForm = useForm<SignInForm>({
    resolver: zodResolver(signInLoginSchema),
  });
  const email = signInForm.watch("email");
  //TODO: Implement onSubmit

  const goToSignUp = () => console.log("goToSignUp");
  return {
    // TODO: Implement onSubmit
    state: {
      loading: "sd",
    },
    form: signInForm,
    functions: {
      goToSignUp,
    },
  };
};
