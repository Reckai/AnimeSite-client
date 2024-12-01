'use client';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/app/shared/Form/form';
import { Input } from '@/app/shared/Input/input';
import React from 'react';
import { useChangePasswordForm } from './hooks/useChangePassword';
import { Button } from '@/app/shared/Button/Button';
import { cn } from '@/app/utils';

function ChangePasswordForm() {
	const { form, state, functions } = useChangePasswordForm();
	return (
		<div className="">
			<Form {...form}>
				<form
					className="bg-el-bg mt-2 rounded-lg p-4 dark:bg-color-el-bg"
					onSubmit={async (event) => {
						event.preventDefault();
						await functions.onSubmit();
					}}
				>
					<div className="flex">
						<FormField
							name="oldPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor="email">Текущий пароль</FormLabel>
									<FormControl>
										<Input
											className="w-full md:w-1/2"
											id="oldPassword"
											autoCapitalize="none"
											autoCorrect="off"
											// disabled={state.isLoading}
											{...field}
										/>
									</FormControl>
									<div className="h-8">
										<FormMessage />
									</div>
								</FormItem>
							)}
						/>
					</div>
					<div className="mb-1 flex">
						<FormField
							name="newPassword"
							render={({ field }) => (
								<FormItem className="mx-1 w-full md:w-[50%-12px]">
									<FormLabel htmlFor="email">Новый пароль</FormLabel>
									<FormControl>
										<Input
											id="newPassword"
											autoCapitalize="none"
											autoCorrect="off"
											// disabled={state.isLoading}
											{...field}
										/>
									</FormControl>
									<div className="h-8">
										<FormMessage />
									</div>
								</FormItem>
							)}
						/>
						<FormField
							name="passwordConfirmation"
							render={({ field }) => (
								<FormItem className="mx-1 w-full md:w-[50%-12px]">
									<FormLabel htmlFor="email">Подтвердите новый пароль</FormLabel>
									<FormControl>
										<Input
											id="passwordConfirmation"
											autoCapitalize="none"
											autoCorrect="off"
											// disabled={state.isLoading}
											{...field}
										/>
									</FormControl>
									{state.isPasswordEqual && !!field.value && (
										<FormDescription>пароли совпадают 🔥</FormDescription>
									)}
									{!state.isPasswordEqual && !!field.value && (
										<FormDescription>пароли не совпадают</FormDescription>
									)}
									<div className="h-8">
										<FormMessage />
									</div>
								</FormItem>
							)}
						/>
					</div>
					<div className="text-right">
						<Button
							variant={'secondary'}
							className={cn(
								'bg-[#e7e6e639] dark:bg-secondary',
								!state.isPasswordEqual ? 'cursor-not-allowed' : ''
							)}
							disabled={!form.getValues('newPassword') || !state.isPasswordEqual || state.isLoading}
						>
							Обновить пароль
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}

export default ChangePasswordForm;
