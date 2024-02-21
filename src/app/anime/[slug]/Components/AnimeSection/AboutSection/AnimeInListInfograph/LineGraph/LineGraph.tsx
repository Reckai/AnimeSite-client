import { AnimeListStatusDistribution } from '@/__generated__/graphql';
import React from 'react';

type asdas= {
    data: AnimeListStatusDistribution[]
}

const getColorByStatus = (status:string) => {
    switch (status) {
      case 'COMPLETED':
        return '#06715a';
      case 'DELAYED':
        return '#f60';
      case 'WATCHING':
        return '#02a9ff';
      case 'PLANNED':
        return '#5b58fb';
      default: 'DROPPED'
        return '#d03a52';
    }
  };
const ProgressBar:React.FC<asdas> = ({data}) => {
  const total = data.reduce((acc, value) => acc + value.count, 0);

  const calculateWidth = (value: number) => {
    return (value / total) * 100 + '%';
  };

  return (
    <div className='flex rounded-md overflow-hidden'>
      {data.map((value, index) => (
        <span
          key={index}
          style={{
            backgroundColor: getColorByStatus(value.status),
            height: '6px',
            width: calculateWidth(value.count),
            
          }}
        >
        </span>
      ))}
    </div>
  );
};

export default ProgressBar;