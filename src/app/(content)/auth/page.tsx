import React from "react";
import Providers from "./providers";
import OAuthContainer from "./components/oAuth/oAuthContainer/oAuthContainer"; // Corrected import name
import { FormContainer } from "@/app/(content)/auth/components/FormContainer/FormContainer";
const AuthPage = () => (
  <div className="flex flex-col  items-center justify-center">
    <Providers stage={{ defaultStage: "signIn" }}>
      <FormContainer />
    </Providers>
    <OAuthContainer />
  </div>
);

export default AuthPage;
