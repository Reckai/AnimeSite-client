import React from "react";

const useWatchAnimeStatus = (initialValue: string, status:string) => {
const [selectedStatus, setSelectedStatus] = React.useState<boolean>(false);
    React.useEffect(() => {
    if (status !== initialValue) {
        setSelectedStatus(true);
    }else{
        setSelectedStatus(false);
    }
}, [status, initialValue]);
return selectedStatus;
}
export default useWatchAnimeStatus;