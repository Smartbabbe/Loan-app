import React from 'react';
import sentIcon from '@/assets/sent.svg';
import receivedIcon from '@/assets/received.svg';
import Image from 'next/image';
import Header from '../Forms/HeaderTag';


type Transaction = {
    id: number;
    purpose: string;
    amount: number;
    status: string;
  };
  
  type Props = {
    transactions: Transaction[];
  };

const TransactionCard = ({ transactions }: Props) => {

  const getIcon = (status: string) => {
    return status.toLowerCase() === 'sent' ? sentIcon : receivedIcon;
  };

  return (
    <div className='w-full text-center m-auto flex flex-col items-center'>
      <Header title="Recent transactions" className='md:w-4/5 font-semibold text-center' />
      <p className='text-lg'>Today</p>
      {transactions.map((txn) => (
        <div
          key={txn.id}
          className="bg-white w-full md:w-4/5 lg:w-3/5 mt-3 rounded-md p-3 shadow-xl mb-4 flex justify-between items-center"
        >
          <div className="flex gap-2">
            <Image  src={getIcon(txn.status)} alt={'status icon'} width={40} height={40} />
            <div className='text-left'>
              <p className="font-medium">{txn.purpose}</p>
              <p className="text-gray-500 text-sm">₦{txn.amount.toLocaleString()}</p>
            </div>
          </div>
          <div>
            <p
              className={`text-md font-semibold ${
                txn.status.toLowerCase() === 'sent'
                  ? 'text-red-500'
                  : 'text-green-600'
              }`}
            >
              {txn.status}
            </p>{' '}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionCard;
