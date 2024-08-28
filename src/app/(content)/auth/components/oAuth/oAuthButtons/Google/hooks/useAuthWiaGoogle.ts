import { useGraphQLClient } from '@/app/context/GraphQLContext/useGraphQLCLient';
import { useMutation } from '@tanstack/react-query';
import { loginWiaGoogleMutation } from '../mutation/loginWiaGoogleMutation';
import { LoginWiaGoogleMutation, LoginWiaGoogleMutationVariables } from '@/gql/graphql';
import { useSession } from '@/app/context/SessionContext/useSession';
import { useRouter } from 'next/navigation';
import { revalidate } from '@/lib/gqlClient';
import { useGoogleLogin } from '@react-oauth/google';
import { toast } from 'sonner';

export const useAuthWiaGoogle = () => {
	const { client } = useGraphQLClient();
	const { setSession } = useSession();
	const router = useRouter();
	const authWiaGoogleMutation = useMutation({
		mutationFn: (data: string) =>
			client.request(loginWiaGoogleMutation, {
				token: data
			}),
		onSuccess: (data: LoginWiaGoogleMutation) => {
			const sessionData = data.loginWiaGoogle;
			const session = {
				id: sessionData.id as string,
				name: sessionData.name as string,
				createAt: sessionData.createdAt as string,
				email: sessionData.email as string,
				image: sessionData.image as string
			};
			setSession(session);
			revalidate('/');
			router.push('/');
		},
		onError: (e) => {
			console.error(e);
		}
	});

	const login = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			try {
				authWiaGoogleMutation.mutateAsync(tokenResponse.access_token);
			} catch (e) {
				console.error(e);
			}
		},
		onError: (e) => {
			toast.error(e.error);
		}
	});
	return {
		login
	};
};
