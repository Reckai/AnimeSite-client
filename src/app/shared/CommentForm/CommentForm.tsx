import React, { FormEvent, FormHTMLAttributes, useState } from 'react';
import { Button } from '@/app/shared/Button/Button';
import { Textarea } from '@/app/shared/TextareaComponent/TextareaComponent';
import { cn } from '@/app/utils';
interface CommentFormProps extends FormHTMLAttributes<HTMLFormElement> {
	loading: boolean;
	error: Error | null;
	autofocus: boolean;
	onSubmitFunction: (message: string) => Promise<void>;
	initialValue?: string;
}

const CommentForm: React.FC<CommentFormProps> = ({
	initialValue = '',
	loading,
	error,
	onSubmitFunction,
	autofocus,
	className
}) => {
	const [message, setMessage] = useState(initialValue);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmitFunction(message).then(() => setMessage(''));
	};
	return (
		<form className={cn('w-full sm:w-3/4', className)} onSubmit={handleSubmit}>
			<div className="w-full space-y-2">
				<Textarea
					autoFocus={autofocus}
					placeholder="Написать комментарий"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					className="w-full"
				/>
				{message.trim() && (
					<div className="flex justify-end">
						<Button
							type="submit"
							// onClick={handleSubmit}
							disabled={loading}
							className="h-8 w-full md:w-auto"
						>
							{loading ? 'Загрузка' : 'Отправить'}
						</Button>
					</div>
				)}
			</div>
			<div className="text-rose-500">{error?.message}</div>
		</form>
	);
};
export default CommentForm;
