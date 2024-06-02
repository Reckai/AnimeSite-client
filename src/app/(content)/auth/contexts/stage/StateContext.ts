'use client';
import React, { createContext } from "react";

export type Stage = "signIn" | "signUp" ;

// | "signUp" | "confirmation";
export interface StageContextProps {
    stage: Stage;
    setStage: (stage: Stage)=> void;
}

export const StageContext = createContext<StageContextProps>({
    stage: "signIn",
    setStage:()=>{}
})
