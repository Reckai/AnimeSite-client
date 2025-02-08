'use client';
import { Button } from '@/app/shared/Button/Button';
import React from 'react';
import { useFilters } from '../../context/Filter/useFilter';

const ResetButton = () => {
	const { clearFilters, resetFilter } = useFilters();

	return (
		<Button
			onClick={() => {
				clearFilters();
				resetFilter('genres');
				resetFilter('studios');
			}}
			variant="destructive"
			className="h-8 w-full bg-el-bg text-center text-error hover:bg-error/30 dark:bg-transparent"
		>
			Сбросить
		</Button>
	);
};

export default ResetButton;
