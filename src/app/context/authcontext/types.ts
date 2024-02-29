import { User } from "@/__generated__/graphql"

type AuthUser = {
    name: User['name']
    id: User['id'],
    avatar: string | null
}


export type AuthContextType = {
    isAuthenticated: boolean
    user: AuthUser | null;
}

