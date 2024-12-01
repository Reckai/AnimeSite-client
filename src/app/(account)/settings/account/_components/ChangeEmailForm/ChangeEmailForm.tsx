'use client';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/app/shared/Form/form';
import { useChangeEmailForm } from './hooks/useChangeEmailForm';
import { Input } from '@/app/shared/Input/input';
import { Button } from '@/app/shared/Button/Button';
import { cn } from '@/app/utils';
import { useSession } from '@/app/context/SessionContext/useSession';

function ChangeEmailForm() {
	const { form, state, functions } = useChangeEmailForm();
	const {session} = useSession()
	return (
		<div >
			<Form {...form}>
				<form
					className="mt-2 rounded-lg bg-el-bg p-4 dark:bg-color-el-bg"
					onSubmit={async (event) => {
						event.preventDefault();
						await functions.onSubmit();
					}}
				>
					<div>
						Текущая почта: {session?.email}
					</div>
					<div className="flex">
						<FormField
							name="password"
							render={({ field }) => (
								<FormItem className="md:w-1/2">
									<FormLabel htmlFor="password">Текущий пароль</FormLabel>
									<FormControl>
										<Input
											className="w-full"
											id="password"
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
							name="newEmail"
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor="email">Новая почта</FormLabel>
									<FormControl>
										<Input
											className="mx-1 w-full"
											id="newEmail"
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
					<div className="text-right">
						<Button
							variant={'secondary'}
							className={cn('bg-[#e7e6e639] dark:bg-secondary')}
							disabled={
								!form.getValues('password') || !form.getValues('newEmail') || state.isLoading
							}
						>
							Обновить почту
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
export default ChangeEmailForm;
