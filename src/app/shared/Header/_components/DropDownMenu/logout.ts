'use server'

import { cookies } from "next/headers"


export const Logout = async() => {
    cookies().delete("access-token")
}