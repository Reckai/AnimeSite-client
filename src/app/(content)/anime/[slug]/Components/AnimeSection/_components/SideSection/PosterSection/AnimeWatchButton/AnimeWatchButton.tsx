'use client';

import React, { useState } from 'react';

import { Anime, AnimeStatus, ChangeAnimeStatusMutationMutation } from '@/gql/graphql';
import { useStatus } from './hooks/useStatus';
import {
	FloatingFocusManager,
	autoUpdate,
	useClick,
	useDismiss,
	useInteractions,
	useRole
} from '@floating-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useGraphQLClient } from '@/app/context/GraphQLContext/useGraphQLCLient';
import { Button } from '@/app/shared/Button/Button';
import { useFloating, shift, flip, offset } from '@floating-ui/react';

import FloatingContent from './_components/DropDownComponent/DropDownComponent';
import { CHANGE_ANIME_STATUS, DELETE_ANIME_STATUS } from './Mutation';

export type DropDownPropertyType = {
	name: string;
	statusProperty: AnimeStatus;
};

type AnimeStatusProps = {
	slug: Anime['slug'];
	animeId: string;
	initialStatus: string | undefined;
};

export const DropDownButtonProperty: DropDownPropertyType[] = [
	{ name: 'Запланировано', statusProperty: AnimeStatus.Planned },
	{ name: 'Просмотрено', statusProperty: AnimeStatus.Completed },
	{ name: 'Брошено', statusProperty: AnimeStatus.Dropped },
	{ name: 'Отложено', statusProperty: AnimeStatus.Delayed },
	{ name: 'Смотрю', statusProperty: AnimeStatus.Watching }
];

const AnimeWatchButton: React.FC<AnimeStatusProps> = ({ animeId, initialStatus, slug }) => {
	const { client } = useGraphQLClient();
	const queryClient = useQueryClient();
	const [isOpen, setIsOpen] = useState(false);
	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [
			offset(10),
			flip({
				mainAxis: true
			}),
			shift()
		],
		whileElementsMounted: autoUpdate
	});
	const dismiss = useDismiss(context);
	const click = useClick(context);
	const role = useRole(context);
	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);
	const { status, changeStatus, isSelectedStatus } = useStatus(initialStatus as AnimeStatus);

	const changeStatusAndCloseFloatingMenu = (status?: AnimeStatus) => {
		changeStatus(status);
		setIsOpen(false);
	};
	const changeStatusMutation = useMutation({
		mutationKey: [`changeStatus-${slug}`],
		mutationFn: (status: AnimeStatus) =>
			client.request(CHANGE_ANIME_STATUS, {
				status,
				animeId
			}),
		onSuccess: (response: ChangeAnimeStatusMutationMutation) => {
			changeStatusAndCloseFloatingMenu(response.changeStatusOfAnime);
			return queryClient.invalidateQueries({
				queryKey: [`anime-${slug}`]
			});
		}
	});
	const deleteStatusMutation = useMutation({
		mutationKey: [`deleteAnimeStatus-${slug}`],
		mutationFn: () =>
			client.request(DELETE_ANIME_STATUS, {
				animeId
			}),
		onSuccess: () => {
			changeStatusAndCloseFloatingMenu();
			return queryClient.invalidateQueries({
				queryKey: [`anime-${slug}`]
			});
		}
	});
	const statusClickHandler = (property: DropDownPropertyType) => {
		if (property.name !== status) {
			try {
				changeStatusMutation.mutateAsync(property.statusProperty);
			} catch (e) {
				console.error(e);
			}
		}
	};
	const deleteStatusHandler = () => {
		deleteStatusMutation.mutate();
	};
	return (
		<>
			<div ref={refs.setReference} {...getReferenceProps()}>
				<Button variant={isSelectedStatus ? 'default' : 'thirdly'} className="w-full">
					{status}
				</Button>
			</div>
			{isOpen && (
				<FloatingFocusManager context={context} modal={false}>
					<FloatingContent
						setFloatingRef={refs.setFloating}
						dropDownButtonProperties={DropDownButtonProperty}
						onStatusClick={(property) => statusClickHandler(property)}
						onDelete={() => deleteStatusHandler()}
						isSelectedStatus
						floatingStyles={floatingStyles}
						getFloatingProps={getFloatingProps}
					/>
				</FloatingFocusManager>
			)}
		</>
	);
};
export default AnimeWatchButton;
