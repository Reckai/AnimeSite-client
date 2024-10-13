import React from 'react';
import { Skeleton } from '@/app/shared/Skeleton/Skeleton';

const AnimeLoading = () => {
	return (
		<div className="relative z-10">
			<div className="mx-16 flex">
				<div className="mr-10 w-64 flex-none">
					<Skeleton className="h-[301px] w-[256px]" />
				</div>
				<div className="mt-8 space-y-2">
					<Skeleton className="h-9 w-80" />
					<Skeleton className="h-7 w-40" />
					<div>
						<Skeleton />
						<Skeleton />
						<Skeleton />
						<Skeleton />
						{Array(5).map((i) => (
							<Skeleton key={i} className="h-10 w-10" />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnimeLoading;
