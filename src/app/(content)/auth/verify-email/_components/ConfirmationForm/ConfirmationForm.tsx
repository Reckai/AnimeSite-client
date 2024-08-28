'use client';
import React, { useEffect } from 'react';
import { useConfirmationForm } from './hooks/useConfirmationForm';
import { SpinnerIcon } from '@/app/shared/SpinnerIcon/SpinnerIcon';

const ConfirmationForm = () => {
	const { functions, state } = useConfirmationForm();

	useEffect(() => {
		functions.verifyEmail();
	});
	return (
		<div className=" ">
			{state.Message && !state.isLoading ? (
				<div>{state.Message}</div>
			) : (
				<SpinnerIcon className="mr-2 h-8 w-8 animate-spin" />
			)}
		</div>
	);
};

export default ConfirmationForm;
