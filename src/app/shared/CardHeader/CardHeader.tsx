import React from 'react';

function CardHeader({ children }: { children: string } | React.PropsWithChildren) {
  return (
    <div className={'font-bold font-sans'}>
      {
            children
        }
    </div>
  );
}

export default CardHeader;
