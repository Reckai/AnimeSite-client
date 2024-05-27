import React from 'react';
import Banner from '@/app/(account)/account/_components/Banner';

function AccountLayout({ children }:{children:React.ReactNode}) {
  return (
    <div className="bg-gray-400">
      <Banner />
      {
                children
            }
    </div>
  );
}

export default AccountLayout;
