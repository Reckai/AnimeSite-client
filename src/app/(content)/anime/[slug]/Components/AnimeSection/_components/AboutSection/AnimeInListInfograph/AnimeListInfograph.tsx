import React from 'react';
import InfoButton from './InfoButton/InfoButton';
import ProgressBar from './LineGraph/LineGraph';
import { AnimeListStatusDistribution } from '@/gql/graphql';

export type AnimeListInfographProps = {
	animeListInfo: AnimeListStatusDistribution[] | undefined;
};
const AnimeListInfograph: React.FC<AnimeListInfographProps> = ({ animeListInfo }) => {
	const graphRef = React.useRef<HTMLDivElement>(null);

	if (!animeListInfo) {
		return null;
	}

	const AllUserCount = animeListInfo.reduce((acc, { count }) => acc + count, 0);
	const sortedStatusList = [...animeListInfo].sort((a, b) => {
		const order = ['COMPLETED', 'WATCHING', 'PLANNED', 'DELAYED', 'DROPPED'];
		return order.indexOf(a.status) - order.indexOf(b.status);
	});

	return (
		<div className="mx-3 mb-2 w-full md:w-1/2">
			<h3 className="mb-2">В списках у {AllUserCount} пользователей</h3>
			<div className="flex flex-wrap items-center justify-between bg-[#e9e9e9d7] px-4 py-6 dark:bg-color-el-bg">
				{sortedStatusList.map(({ count, status }) => {
					return <InfoButton key={status} count={count} status={status} />;
				})}
			</div>
			<div ref={graphRef} className="w-full rounded-md">
				<ProgressBar data={sortedStatusList}></ProgressBar>
			</div>
		</div>
	);
};

export default AnimeListInfograph;
