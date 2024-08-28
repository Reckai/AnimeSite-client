import React from 'react';

function CardHeader({ children }: { children: string } | React.PropsWithChildren) {
	return <div className={'font-sans font-bold'}>{children}</div>;
}

export default CardHeader;
