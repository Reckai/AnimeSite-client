"use client";
import { useForm } from "react-hook-form";
import { signInLoginSchema } from "../constants/signInSchema";
import {
  loginUserMutation,
  useLoginUserMutation,
} from "./useLoginUserMutation";
import { useStage } from "../../../contexts/stage/useStage";
import { zodResolver } from "@hookform/resolvers/zod";

import { useSession } from "@/app/context/SessionContext/useSession";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { revalidate } from "@/lib/gqlClient";
interface SignInForm {
  email: string;
  password: string;
}

export const useSignInForm = () => {
  const { setSession } = useSession();
  const { setStage } = useStage();
  const router = useRouter();
  const signInForm = useForm<SignInForm>({
    resolver: zodResolver(signInLoginSchema),
  });
  //TODO: Implement onSubmit
  const loginMutation = useLoginUserMutation();
  const onSubmit = signInForm.handleSubmit(async (data) => {
    const loginUserResponse = await loginMutation.mutateAsync(data);

    if (loginUserResponse) {
      const sessionData = loginUserResponse.loginUser;
      const session = {
        id: sessionData.user.id as string,
        name: sessionData.user.name as string,
        createAt: sessionData.user.createdAt as string,
        email: sessionData.user.email as string,
        image: sessionData.user.image as string,
      };
      setSession(session);
      revalidate("/");
      router.push("/");
    }
    if (loginMutation.error) {
      const error = loginMutation.error;
      console.error(error.message.replace("GraphQL Request Error: ", ""));
      toast.error(error.message.replace("GraphQL Request Error: ", ""));
    }
  });
  const goToSignUp = () => setStage("signUp");

  return {
    state: {
      loading: loginMutation.isPending,
    },
    form: signInForm,
    functions: {
      onSubmit,
      goToSignUp,
    },
  };
};
