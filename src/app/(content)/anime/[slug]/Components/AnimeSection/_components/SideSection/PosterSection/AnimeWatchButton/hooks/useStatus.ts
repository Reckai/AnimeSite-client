import { AnimeStatus } from "@/gql/graphql";
import { DropDownButtonProperty } from "../AnimeWatchButton";
import React from "react";

const DropDownButtonInitialText = "+ Добавить в список";

export const useStatus = (initialAnimeStatus?: AnimeStatus) => {
    const initialStatusName = React.useMemo(() => {
        return DropDownButtonProperty.find(property => property.statusProperty === initialAnimeStatus)?.name || DropDownButtonInitialText;
    }, [initialAnimeStatus]);
    
    const [status, setStatus] = React.useState<string>(initialStatusName || DropDownButtonInitialText)
    
    const changeStatus = (animeStatus?: AnimeStatus) => {
        const newStatusName = DropDownButtonProperty.find(property => property.statusProperty === animeStatus)?.name || DropDownButtonInitialText;
        setStatus(newStatusName);
    };
 
    const isSelectedStatus = status !== DropDownButtonInitialText
    return {status, changeStatus, isSelectedStatus}
}