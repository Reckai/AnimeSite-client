import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { FilterState } from '../context/Filter/FilterContext';

// types.ts
type FilterURLState = {
	filter: {
		take: number;
		filters: FilterState;
		orderBy?: {
			[key: string]: 'asc' | 'desc';
		};
		ruName?: string;
	};
};

// hooks/useFilterUrl.ts

export function useFilterUrl({ filter }: { filter: any }) {
	const router = useRouter();

	const updateUrl = useCallback(
		({ filter }: { filter: any }) => {
			const params = new URLSearchParams();

			// Add search term if exists
			if (filter.ruName) {
				params.set('search', filter.ruName);
			}

			// Add included genres
			if (filter.filters.genres?.include?.length > 0) {
				params.set('genres', filter.filters.genres.include.join(','));
			}

			// Add excluded genres
			if (filter.filters.genres?.exclude?.length > 0) {
				params.set('excludeGenres', filter.filters.genres.exclude.join(','));
			}

			// Add included studios
			if (filter.filters.studios?.include?.length > 0) {
				params.set('studios', filter.filters.studios.include.join(','));
			}

			// Add excluded studios
			if (filter.filters.studios?.exclude?.length > 0) {
				params.set('excludeStudios', filter.filters.studios.exclude.join(','));
			}

			// Add order if not default
			if (filter.orderBy?.asc !== 'asc') {
				params.set('order', filter.orderBy.asc);
			}

			const queryString = params.toString();
			const url = queryString ? `?${queryString}` : '';
			router.push(`/catalog${url}`);
		},
		[router]
	);

	return { updateUrl };
}
