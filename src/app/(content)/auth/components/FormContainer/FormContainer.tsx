"use client";
import { Stage } from "../../contexts/stage/StateContext";
import { useStage } from "../../contexts/stage/useStage";
import SignInForm from "../SignInFrom/SignInForm";

const component: Record<Stage, React.ReactNode> = {
  signIn: <SignInForm />,
};

export const FormContainer = () => {
  const { stage } = useStage();
  return component[stage];
};
