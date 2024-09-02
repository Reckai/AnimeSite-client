import { useMutation } from "@tanstack/react-query";
import { likeComment } from "../Mutations";
import { useGraphQLClient } from "@/app/context/GraphQLContext/useGraphQLCLient";




export const useLikeComment = ({functions}:{functions: (data:number)=>void}) => {
    const {client} = useGraphQLClient();
	return useMutation({
		mutationFn: (commentId: string) => client.request(likeComment, { commentId }),
        onSuccess: async(data, variables, context)=> {
            functions(data.likeComment)
        },
	});
};

