'use client';
import { useForm } from 'react-hook-form';
import { signInLoginSchema } from '../constants/signInSchema';
import { useLoginUserMutation } from './useLoginUserMutation';
import { useStage } from '../../../contexts/stage/useStage';

import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from '@/app/context/SessionContext/useSession';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { revalidate } from '@/lib/gqlClient';

interface SignInForm {
	email: string;
	password: string;
}

export const useSignInForm = () => {
	const { setSession } = useSession();
	const { setStage } = useStage();
	const router = useRouter();
	const signInForm = useForm<SignInForm>({
		resolver: zodResolver(signInLoginSchema)
	});

	const loginMutation = useLoginUserMutation();

	const onSubmit = signInForm.handleSubmit(async (data) => {
		try {
			const loginUserResponse = await loginMutation.mutateAsync(data);

			if (loginUserResponse?.loginUser) {
				const sessionData = loginUserResponse.loginUser;
				const session = {
					id: sessionData.user.id as string,
					name: sessionData.user.name as string,
					createAt: sessionData.user.createdAt as string,
					email: sessionData.user.email as string,
					image: sessionData.user.avatar as string
				};
				setSession(session);
				revalidate('/');
				router.push('/');
				toast.success('Logged in successfully');
			} else {
				throw new Error('Login failed');
			}
		} catch (error) {
			let errorMessage = 'An unexpected error occurred during sign in';

			if (error instanceof Error) {
				// Remove the "GraphQL Request Error: " prefix if it exists
				errorMessage = error.message.replace('GraphQL Request Error: ', '');

				// Check for specific error messages
				if (errorMessage.includes('Invalid credentials')) {
					errorMessage = 'Invalid email or password';
				} else if (errorMessage.includes('User not found')) {
					errorMessage = 'User not found';
				}
			}

			console.error('Login error:', errorMessage);
			toast.error(errorMessage);
		}
	});

	const goToSignUp = () => setStage('signUp');

	return {
		state: {
			loading: loginMutation.isPending
		},
		form: signInForm,
		functions: {
			onSubmit,
			goToSignUp
		}
	};
};
