'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { changeEmailSchema } from "../emailChangeSchema";
import { useChangeEmailMutation } from "./useChangeEmailMutation";
import { toast } from "sonner";
import removeGraphQLErrorPrefix from "@/utils/removeGraphQLErrorPrefix";

interface changeEmailForm{
    password: string;
    newEmail: string;
}

export const useChangeEmailForm = () => {
    const changeEmailForm = useForm<changeEmailForm>({
        defaultValues:{},
        resolver: zodResolver(changeEmailSchema)
    })
    const changeEmailMutation = useChangeEmailMutation()
    

    const onSubmit = changeEmailForm.handleSubmit(async ()=>{
        const {...values} = changeEmailForm.getValues()
        try{
          await changeEmailMutation.mutateAsync({...values});
          toast.success('Ваша почта успешно изменена');   
        }catch (error){
            if(error instanceof Error){
                const cleanedErrorMessage = removeGraphQLErrorPrefix(error.message);
                const errorMessage = cleanedErrorMessage.includes('Password isn`t right')
                ? 'Неправильный пароль'
                : 'Возникла ошибка';
                toast.error(errorMessage);
            } else {
                toast.error('Непредвиденная ошибка')
            }
        }
    })
    
    return {
        form: changeEmailForm,
        state: {
            isLoading: changeEmailMutation.isPending
        },
        functions:{
            onSubmit
        }
    }

}

