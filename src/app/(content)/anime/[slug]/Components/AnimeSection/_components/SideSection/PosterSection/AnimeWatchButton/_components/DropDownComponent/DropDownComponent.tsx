import DropDownButton from '@/app/shared/DropDownButton/DropDownButton';
import { DropDownPropertyType } from '../../AnimeWatchButton';
import { AnimeStatus } from '@/gql/graphql';
import { UseFloatingReturn } from '@floating-ui/react';

interface FloatingMenuContentProps {
	dropDownButtonProperties: DropDownPropertyType[];
	onStatusClick: (property: DropDownPropertyType) => void;
	onDelete: () => void;
	isSelectedStatus: boolean;
	floatingStyles: React.CSSProperties;
	getFloatingProps: () => Record<string, unknown>;
	setFloatingRef: UseFloatingReturn['refs']['setFloating'];
}

const FloatingContent: React.FC<FloatingMenuContentProps> = ({
	dropDownButtonProperties,
	onStatusClick,
	onDelete,
	isSelectedStatus,
	floatingStyles,
	getFloatingProps,
	setFloatingRef
}) => {
	return (
		<div
			ref={setFloatingRef}
			style={{ ...floatingStyles, cursor: 'pointer' }}
			{...getFloatingProps()}
			className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-md bg-white p-2 text-color-text dark:bg-opacity-secondary"
		>
			<div className="flex w-full cursor-pointer flex-col dark:bg-opacity-secondary">
				{dropDownButtonProperties.map((property, index) => (
					<DropDownButton
						disabled={false}
						clickHandler={() => onStatusClick(property)}
						key={index}
						text={property.name}
					/>
				))}

				{isSelectedStatus && (
					<div className="mt-[2px] border-t-[1px] border-color-text pt-[2px]">
						<DropDownButton
							disabled={false}
							clickHandler={() => onDelete()}
							text="Удалить из списка"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default FloatingContent;
