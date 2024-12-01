'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema } from "./passwordChangeSchema";
import { isPasswordEqualCompare } from "@/utils/isPasswordEquelCompare";
import { useForm } from "react-hook-form";
import { useChangePasswordMutation } from "./usechangePasswordMutation";
import { toast } from "sonner";
import removeGraphQLErrorPrefix from "@/utils/removeGraphQLErrorPrefix";

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
const changePasswordMutation = useChangePasswordMutation()
const onSubmit = changePasswordForm.handleSubmit(async () => {
    const { ...values } = changePasswordForm.getValues();

    try {
        await changePasswordMutation.mutateAsync({ ...values });
        toast.success('Ваш пароль успешно изменен');
        
    } catch (error) {
        console.log(typeof error)
        // Handle the error and show it in a toast
        if (error instanceof Error) {
          

            const cleanedErrorMessage = removeGraphQLErrorPrefix(error.message);
            console.log(cleanedErrorMessage);
            const errorMessage = cleanedErrorMessage.includes('Password isn`t right')
                ? 'Неправильный пароль'
                : 'Возникла ошибка в ходе изменения пароля';
            toast.success(errorMessage);
        } else {
            toast.error('An unexpected error occurred');
        }
    }
});


const isPasswordEqual = isPasswordEqualCompare(changePasswordForm,'newPassword','passwordConfirmation')


return {
    form: changePasswordForm,
    state:{
        isPasswordEqual,
        isLoading:changePasswordMutation.isPending
    },
    functions:{
        onSubmit
    }
}

}