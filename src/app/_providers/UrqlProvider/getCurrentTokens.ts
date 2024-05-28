'use server'
import { cookies } from "next/headers";

export const getCurrentTokens =  async () => {
    return  {
        accessToken: cookies().get('access-token')?.value || '',
        refreshToken: cookies().get('refresh-token')?.value || '',
    }
}