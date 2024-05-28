"use client";
import { useForm } from "react-hook-form";
import { signInLoginSchema } from "../constants/signInSchema";
import { loginUserMutation } from "./useLoginUserMutation";
import { useStage } from "../../../contexts/stage/useStage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@urql/next";
import { flushSync } from "react-dom";
import { useSession } from "@/app/context/SessionContext/useSession";
import { useRouter } from "next/navigation";
interface SignInForm {
  email: string;
  password: string;
}

export const useSignInForm = () => {
  const { setSession } = useSession();
  const router = useRouter();
  const signInForm = useForm<SignInForm>({
    resolver: zodResolver(signInLoginSchema),
  });
  const email = signInForm.watch("email");
  //TODO: Implement onSubmit
  const [loginUserResponse, loginUser] = useMutation(loginUserMutation);
  const onSubmit = signInForm.handleSubmit(async (data) => {
    console.log(data);
    loginUser({ args: data }).then((result) => {
      if (result.data?.loginUser) {
        const session = {
          id: result.data.loginUser.user.id as string,
          name: result.data.loginUser.user.name as string,
          createAt: result.data.loginUser.user.createdAt as string,
          email: result.data.loginUser.user.email as string,
        };
        flushSync(() => setSession(session));
        router.push("/");
      }
    });
  });
  const goToSignUp = () => console.log("goToSignUp");

  return {
    state: {
      loading: loginUserResponse.fetching,
    },
    form: signInForm,
    functions: {
      onSubmit,
      goToSignUp,
    },
  };
};
