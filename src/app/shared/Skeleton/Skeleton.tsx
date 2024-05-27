import {cn} from "@/app/utils";


const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className={cn('animate-pulse  rounded-md bg-gray-400/30', className)} {...props} />;
};

export { Skeleton };
