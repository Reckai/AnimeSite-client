import { User } from "@/__generated__/graphql"
import { JwtPayload, jwtDecode } from "jwt-decode"
import React from "react"
import { AuthContextType } from "./types"


const initialState = {
    isAuthenticated: false,
    user: null,
}

export const AuthContext = React.createContext<AuthContextType>(initialState)