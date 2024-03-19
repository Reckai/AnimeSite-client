import React from 'react';

function CardFooter({children}: { children: string} | React.PropsWithChildren) {
    return (
        <div className={'flex'}>
            {
            children
            }
        </div>
    );
}

export default CardFooter;
