'use client';
import { useForm } from 'react-hook-form';
import { useStage } from '../../../contexts/stage/useStage';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '../constants/signUpSchema';
import { toast } from 'sonner';
import { useSignUpMutation } from './useSignUpMutation';

interface SignUpForm {
	email: string;
	password: string;
	passwordConfirmation: string;
}

export const useSignUpForm = () => {
	const { setStage } = useStage();

	const signUpForm = useForm<SignUpForm>({
		defaultValues: {},
		resolver: zodResolver(signUpSchema)
	});

	const signUpUserMutation = useSignUpMutation();

	const goToSignIn = () => setStage('signIn');
	const onSubmit = signUpForm.handleSubmit(async (data) => {
		const { passwordConfirmation, ...values } = signUpForm.getValues();

		try {
			await signUpUserMutation.mutateAsync({ ...values });
			toast.success('User created successfully, check your email to verify.');
			goToSignIn();
		} catch (error) {
			// Handle the error and show it in a toast
			if (error instanceof Error) {
				const errorMessage = error.message.includes('User already exists')
					? 'User already exists'
					: 'An error occurred during sign up';
				toast.error(errorMessage);
			} else {
				toast.error('An unexpected error occurred');
			}
		}
	});
	const isPasswordEqual = signUpForm.watch('password') === signUpForm.watch('passwordConfirmation');

	return {
		state: {
			isLoading: signUpUserMutation.isPending,
			isPasswordEqual
		},
		form: signUpForm,
		functions: {
			onSubmit,
			goToSignIn
		}
	};
};
