import React from "react";
import { FormContainer } from "../components/FormContainer/FormContainer";
import ConfirmationForm from "./_components/ConfirmationForm/ConfirmationForm";
import CardWrapper from "@/app/shared/CardWrapper/CardWrapper";

const page = () => {
  return (
    <div className="flex items-center justify-center ">
      <CardWrapper
        backButtonText="Back to Login"
        backButtonLink="/auth"
        headerText="Confirming your email"
      >
        <ConfirmationForm />
      </CardWrapper>
    </div>
  );
};

export default page;
