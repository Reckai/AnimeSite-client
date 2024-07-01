import DropDownButton from "@/app/shared/DropDownButton/DropDownButton";
import { DropDownPropertyType } from "../../AnimeWatchButton";
import { AnimeStatus } from "@/gql/graphql";
import { UseFloatingReturn } from "@floating-ui/react";

interface FloatingMenuContentProps {
  dropDownButtonProperties: DropDownPropertyType[];
  onStatusClick: (property: DropDownPropertyType) => void;
  onDelete: () => void;
  isSelectedStatus: boolean;
  floatingStyles: React.CSSProperties;
  getFloatingProps: () => Record<string, unknown>;
  setFloatingRef: UseFloatingReturn["refs"]["setFloating"];
}

const FloatingContent: React.FC<FloatingMenuContentProps> = ({
  dropDownButtonProperties,
  onStatusClick,
  onDelete,
  isSelectedStatus,
  floatingStyles,
  getFloatingProps,
  setFloatingRef,
}) => {
  return (
    <div
      ref={setFloatingRef}
      style={{ ...floatingStyles, cursor: "pointer" }}
      {...getFloatingProps()}
      className="p-2 mt-4 rounded-md bg-white dark:bg-opacity-secondary text-color-text flex flex-col cursor-pointer items-center justify-center"
    >
      <div className="flex cursor-pointer flex-col w-full dark:bg-opacity-secondary">
        {dropDownButtonProperties.map((property, index) => (
          <DropDownButton
            disabled={false}
            clickHandler={() => onStatusClick(property)}
            key={index}
            text={property.name}
          />
        ))}

        {isSelectedStatus && (
          <div className="border-t-[1px] pt-[2px] mt-[2px] border-color-text">
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
