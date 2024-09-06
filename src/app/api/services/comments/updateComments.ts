import { useGraphQLClient } from "@/app/context/GraphQLContext/useGraphQLCLient";
import { useMutation, useQueryClient,  } from "@tanstack/react-query";
import {  UPDATE_COMMENT } from "../../Mutations";

export const useUpdateComment = (slug:string)=>{
    const { client } = useGraphQLClient();
    const queryClient = useQueryClient()
    return useMutation({
    mutationFn: ({message, commentId, }:{message:string, commentId:string,}) => client.request(UPDATE_COMMENT, { commentId, message, }),
    onSuccess:()=>{
        queryClient.invalidateQueries({ queryKey: [`anime-comments`, slug] });    
    }
    
});

}
