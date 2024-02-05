import { useState } from "react";

const useAnimeStatus = (initialValue: string) => {
const [status, setStatus] = useState<string>(initialValue);
function changeStatus(newStatus: string) {
    setStatus(newStatus); 
}
return { status, changeStatus};
}
export default useAnimeStatus;