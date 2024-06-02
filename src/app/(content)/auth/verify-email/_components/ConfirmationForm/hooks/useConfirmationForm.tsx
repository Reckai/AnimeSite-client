import { graphql } from "@/gql";
import { useMutation } from "@urql/next";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
const VERIFY_EMAIL_MUTATION = graphql(`
  mutation VerifyEmailByToken($token: String!) {
    VerifyEmailByToken(token: $token) {
      message
      success
    }
  }
`);
const SIGN_IN = "/auth";
export const useConfirmationForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [Message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [verifyEmailMutationResult, verifyEmailMutation] = useMutation(
    VERIFY_EMAIL_MUTATION
  );

  const verifyEmail = async () => {
    if (!token) return;
    const result = await verifyEmailMutation({ token });

    if (result.data) {
      setMessage(result.data.VerifyEmailByToken.message);
      setSuccess(result.data.VerifyEmailByToken.success);
      setTimeout(() => {
        router.push(SIGN_IN);
      }, 3000);
    }
    if (result.error) {
      toast.error(result.error.message.replace("[GraphQL] ", ""));
      setSuccess(false);
    }
  };

  return {
    state: {
      Message,
      success,
      isLoading: verifyEmailMutationResult.fetching,
    },
    functions: {
      verifyEmail,
    },
  };
};
