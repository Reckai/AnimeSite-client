'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { changePasswordSchema } from "./passwordChangeSchema";

interface changePasswordForm {
    oldPassword: string;
    newPassword:string;
    passwordConfirmation:string;
}


export const useChangePasswordForm = ()=>{
const changePasswordForm = useForm<changePasswordForm>({
    defaultValues:{},
    resolver: zodResolver(changePasswordSchema)
})


return {
    form: changePasswordForm
}

}