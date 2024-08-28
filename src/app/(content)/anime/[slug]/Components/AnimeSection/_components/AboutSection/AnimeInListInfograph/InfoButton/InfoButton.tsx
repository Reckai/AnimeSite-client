import { AnimeListStatusDistribution } from '@/__generated__/graphql';
import React from 'react';

const Status_Settings = {
	COMPLETED: { color: '#06715a', text: 'Просмотрено' },
	WATCHING: { color: '#02a9ff', text: 'Смотрю' },
	PLANNED: { color: '#5b58fb', text: 'Запланировано' },
	DELAYED: { color: '#f60', text: 'Отложено' },
	DROPPED: { color: '#d03a52', text: 'Брошено' }
};

const InfoButton: React.FC<AnimeListStatusDistribution> = ({ count, status }) => {
	return (
		<div className="text-sm">
			<span
				style={{ backgroundColor: `${Status_Settings[status].color}` }}
				className={`mb-[3px] inline-flex h-7 items-center justify-center rounded-md border-[1px] border-transparent px-3 text-white`}
			>
				<span className="leading-snug">{Status_Settings[status].text}</span>
			</span>
			<div className={`items-center text-center`}>
				{count}
				<span className="text-color-text"> в списке</span>
			</div>
		</div>
	);
};

export default InfoButton;
