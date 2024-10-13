import { useSignUpForm } from './hooks/useSignUpForm';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage
} from '@/app/shared/Form/form';
import { Label } from '@/app/shared/Label/Label';
import { Input } from '@/app/shared/Input/input';
import { PasswordInput } from '@/app/shared/PasswordInput/password-input';
import { Button } from '@/app/shared/Button/Button';
import { SpinnerIcon } from '@/app/shared/SpinnerIcon/SpinnerIcon';

export const SignUpForm = () => {
	const { form, state, functions } = useSignUpForm();

	return (
		<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div className="flex flex-col space-y-2 text-center">
				<h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
				<p className="text-sm text-gray-500">Enter your email below to create your account</p>
			</div>
			<div>
				<Form {...form}>
					<form
						onSubmit={async (event) => {
							event.preventDefault();
							await functions.onSubmit();
						}}
						className="space-y-6"
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<Label className="sr-only" htmlFor="email">
										Email
									</Label>
									<FormControl>
										<Input
											id="email"
											placeholder="email@example.com"
											autoCapitalize="none"
											autoComplete="email"
											autoCorrect="off"
											disabled={state.isLoading}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<Label className="sr-only" htmlFor="password">
										Password
									</Label>
									<FormControl>
										<PasswordInput
											id="password"
											placeholder="your very secret password"
											autoCapitalize="none"
											autoCorrect="off"
											autoComplete="password"
											disabled={state.isLoading}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="passwordConfirmation"
							render={({ field }) => (
								<FormItem>
									<Label className="sr-only" htmlFor="passwordConfirmation">
										Confirm Password
									</Label>
									<FormControl>
										<PasswordInput
											id="passwordConfirmation"
											placeholder="confirm your password"
											autoCapitalize="none"
											autoCorrect="off"
											autoComplete="passwordConfirmation"
											disabled={state.isLoading}
											{...field}
										/>
									</FormControl>
									{state.isPasswordEqual && !!field.value && (
										<FormDescription>passwords are equal 🔥</FormDescription>
									)}
									{!state.isPasswordEqual && (
										<FormDescription>confirm your password</FormDescription>
									)}
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button className="w-full" disabled={state.isLoading}>
							{state.isLoading && <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />}
							Sign up
						</Button>
					</form>
				</Form>
				<div className="flex justify-center">
					<Button disabled={state.isLoading} variant="link" onClick={functions.goToSignIn}>
						<span className="bg-background text-muted-foreground px-2">have account already?</span>
					</Button>
				</div>
			</div>
		</div>
	);
};
