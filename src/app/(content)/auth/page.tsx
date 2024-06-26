
import React from "react";
import Providers from "./providers";
import {FormContainer} from "@/app/(content)/auth/components/FormContainer/FormContainer";
const AuthPage = () => (
  <Providers stage={{ defaultStage: "signIn" }}>
    <div className="flex   items-center justify-center">
      <FormContainer />
    </div>
  </Providers>
);

export default AuthPage;
