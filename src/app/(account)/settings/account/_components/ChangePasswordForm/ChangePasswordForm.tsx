'use client';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/app/shared/Form/form';
import { Input } from '@/app/shared/Input/input';
import { Label } from '@/app/shared/Label/Label';
import React from 'react';
import { useChangePasswordForm } from './hooks/useChangePassword';

function ChangePasswordForm() {
	const { form } = useChangePasswordForm();
	return (
		<Form {...form}>
			<form action="">
				<FormField
					name="oldPassword"
					render={({ field }) => (
						<FormItem>
							<Label className="sr-only" htmlFor="email">
								Текущий пароль
							</Label>
							<FormControl>
								<Input
									id="email"
									placeholder="email@example.com"
									autoCapitalize="none"
									autoComplete="email"
									autoCorrect="off"
									// disabled={state.isLoading}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}

export default ChangePasswordForm;
