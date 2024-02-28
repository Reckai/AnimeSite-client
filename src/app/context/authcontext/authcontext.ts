import { User } from "@/__generated__/graphql"
import { JwtPayload, jwtDecode } from "jwt-decode"
import React from "react"


interface UserI {
    id: User["id"]
    name: User["name"]
}
