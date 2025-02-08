'use client';
import { Input } from '@/app/shared/Input/input';
import React, { useEffect, useState } from 'react';
import { useFilters } from '../../context/Filter/useFilter';

const Search = () => {
	const { search, setSearch } = useFilters();
	const [inputValue, setInputValue] = useState(search);

	useEffect(() => {
		console.log('sd');
		setInputValue(search);
	}, [search]);

	useEffect(() => {
		const debounceTimeout = setTimeout(() => {
			setSearch(inputValue);
		}, 300);

		return () => clearTimeout(debounceTimeout);
	}, [inputValue, setSearch]);

	return (
		<div className="w-3/4">
			<Input
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
				placeholder="Поиск..."
			/>
		</div>
	);
};

export default Search;
