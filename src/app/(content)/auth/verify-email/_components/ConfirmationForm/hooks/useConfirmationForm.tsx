import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { useVerifyEmailMutation } from "./useVerifyEmailMutation";

const SIGN_IN = "/auth";
export const useConfirmationForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [Message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const verifyEmailMutation = useVerifyEmailMutation();
  const verifyEmail = async () => {
    if (!token) return;
    const verifyMutationResponse = await verifyEmailMutation.mutateAsync(token);

    if (verifyMutationResponse) {
      setMessage(verifyMutationResponse.VerifyEmailByToken.message);
      setSuccess(verifyMutationResponse.VerifyEmailByToken.success);
      setTimeout(() => {
        router.push(SIGN_IN);
      }, 3000);
    }
    if (verifyEmailMutation.error) {
      toast.error(verifyEmailMutation.error.message.replace("[GraphQL] ", ""));
      setSuccess(false);
    }
  };

  return {
    state: {
      Message,
      success,
      isLoading: verifyEmailMutation.isPending,
    },
    functions: {
      verifyEmail,
    },
  };
};
