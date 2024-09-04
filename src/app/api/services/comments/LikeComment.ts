import { useMutation } from "@tanstack/react-query";
import { useGraphQLClient } from "@/app/context/GraphQLContext/useGraphQLCLient";


import { graphql } from "@/gql/gql";


export const likeComment = graphql(`
	mutation LikeComment($commentId: String!) {
		likeComment(commentId: $commentId)
	}
`);

export const useLikeComment = ({functions}:{functions: (data:number)=>void}) => {
    const {client} = useGraphQLClient();
	return useMutation({	
		mutationFn: (commentId: string) => client.request(likeComment, { commentId }),
        onSuccess: async(data, variables, context)=> {
            functions(data.likeComment)
        },
	});
};

