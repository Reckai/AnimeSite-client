import React from "react";
import Providers from "./providers";
import { FormContainer } from "./components/FormContainer/FormContainer";

const AuthPage = () => (
  <Providers stage={{ defaultStage: "signIn" }}>
    <FormContainer />
  </Providers>
);

export default AuthPage;
