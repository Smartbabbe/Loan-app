import React from 'react';
import ProfileCard from './ProfileCard';
import VirtualCard from './VirtualCard';
import profileimg from '@/assets/dashboardprofileimg.svg';
import leftarrow from '@/assets/arrowleft.svg';
import rightarrow from '@/assets/arrowright.svg';
import addCardIcon from '@/assets/createcardaddicon.svg';
import mc from '@/assets/mastercardicon.svg';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Line,
} from 'recharts';
import TransactionCard from './TransactionCard';
import Image from 'next/image';
import FormSectionTitle from '../Forms/FormSectionTitle';
import DateRangeButton from './DateRangeButton';

const DashboardFull = () => {

  // Data for the bar and line chart.
  const financialData = [
    { month: 'JAN', income: 95000, expenses: 30000 },
    { month: 'FEB', income: 120000, expenses: 100000 },
    { month: 'MAR', income: 90000, expenses: 55000 },
    { month: 'APR', income: 135000, expenses: 53000 },
    { month: 'MAY', income: 80000, expenses: 52000 },
    { month: 'JUN', income: 85000, expenses: 62000 },
  ];

  // Data for the wallet pie chart.
  const walletData = [
    { name: 'Income', value: 70 },
    { name: 'Expenses', value: 30 },
  ];

  // Color codes
  const COLORS = ['#b388ff', '#ff1744'];

  const expenseBreakdownData = [
    { name: 'Household', value: 40 },
    { name: 'Kids', value: 20 },
    { name: 'Technology', value: 25 },
    { name: 'Leisure', value: 15 },
  ];

  const EXPENSE_COLORS = ['#ab47bc', '#ffca28', '#8e24aa', '#f06292'];

  // Profile card data
  const profileData = {
    name: 'David Philips',
    profileimg: { profileimg },
    bank: 'Research Bank',
    phoneNumber: 10123456789,
    balance: 750000,
    cardNumber: 2098678687656786,
    expiryDate: '08/2021',
  };

  // Code to write atm card number with space after four digits
  const formatCardNumber = (number: number) => {
    return number
      .toString()
      .replace(/\D/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();
  };

  // Data for the transaction card
  const transactions = [
    {
      id: 1,
      purpose: "Tona's school fees",
      amount: 500000,
      status: 'sent',
    },
    {
      id: 2,
      purpose: 'From Musa',
      amount: 200000,
      status: 'Received',
    },
  ];

  return (
    <>
      <div className="flex w-full max-lg:order-2 flex-col text-left self-start">
        <div className='max-lg:text-center max-lg:mt-5'>
          <FormSectionTitle title={'Financial summary'} className={'max-lg:text-3xl'} />
          <p>You are eligible for 50% overdraft</p>          
        </div>
        <div className='flex gap-4 justify-between sm:gap-8 md:gap-16 my-5 max-md:flex-wrap'>
          <div className='flex items-center gap-4 px-4 py-2 shadow-md hover:shadow-lg transition bg-white rounded'>
            <div className='flex items-center gap-2'>
              <div className='size-3 bg-gradient-to-b from-[#B353FF] via-gray/50 to-[#7ED1FF]'></div>
              <p>Income</p>
            </div>
            <div className='flex items-center gap-2'>
              <div className='size-3 bg-red-400'></div>
              <div>Expenses</div>
            </div>
          </div>
          <DateRangeButton placeholder="Past 6 months" />
        </div>

        <div className="mt-4 pl-4 w-full">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={financialData}
              margin={{ top: 5, right: 10, left: -10, bottom: 10 }}
            >
              {/* Gradient definition for bars */}
              <defs>
                <linearGradient
                  id="incomeGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#B353FF" stopOpacity={1} />
                  <stop offset="100%" stopColor="#7ED1FF" stopOpacity={1} />
                </linearGradient>
              </defs>

              {/* Grid and other components */}
              <Legend />

              {/* X and Y Axis with Labels */}
              <XAxis dataKey="name" />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip cursor={false} />

              {/* Bar for Income with Gradient */}
              <Bar dataKey="income" fill="url(#incomeGradient)" />

              {/* Line for Expenses */}
              <Line
                type="monotone"
                dataKey="expenses"
                stroke="#FF6347"
                strokeWidth={2}
                dot={true} // Displaying dots on the line
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Wallet Summary Heading */}
        <div className='flex justify-between items-center gap-4 sm:gap-8 md:gap-16 my-5 flex-wrap'>
          <FormSectionTitle
            title={'Wallet Summary'}
            className={'text-center mt-6'}
          /> 
          <DateRangeButton placeholder="May" />        
        </div>


        {/* Two Independent Pie Chart Containers Side by Side */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Pie Chart: Income vs Expenses */}
          <div className="w-full text-center p-6">
            <h3 className="text-lg font-semibold mb-2">Income vs Expenses</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={walletData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={70}
                  dataKey="value"
                >
                  {walletData.map((entry, index) => (
                    <Cell
                      key={`cell-wallet-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart: Expense Breakdown */}
          <div className="w-full text-center p-6">
            <h3 className="text-lg font-semibold mb-2">Expense Breakdown</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={expenseBreakdownData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={70}
                  dataKey="value"
                >
                  {expenseBreakdownData.map((entry, index) => (
                    <Cell
                      key={`cell-expense-${index}`}
                      fill={EXPENSE_COLORS[index % EXPENSE_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="w-full">
        <ProfileCard
          profileImage={profileimg}
          name={profileData.name}
          bank={profileData.bank}
          phoneNumber={profileData.phoneNumber}
          className='lg:w-4/5 m-auto'
        />
        <div className="flex justify-center">
          <Image src={leftarrow} alt={'left arrow'} />
          <VirtualCard className="text-white p-0 flex items-between relative">
            <div className="w-full p-4 flex justify-between">
              <div>
                <p>Current Balance</p>
                <p className="text-3xl">
                  ₦{profileData.balance.toLocaleString()}
                </p>
              </div>
              <Image src={mc} alt={'mastercard icon'} />
            </div>
            <div className="flex justify-between w-full p-4">
              <p>{formatCardNumber(profileData.cardNumber)}</p>
              <p>{profileData.expiryDate}</p>
            </div>
          </VirtualCard>
          <Image src={rightarrow} alt={'right arrow'} />
        </div>

        <div className="flex w-3/5 m-auto justify-center gap-2">
          <div className="w-[12px] h-[12px] rounded-full bg-gray-400"></div>
          <div className="w-[12px] h-[12px] rounded-full bg-gray-300"></div>
          <div className="w-[12px] h-[12px] rounded-full bg-gray-300"></div>
        </div>
        <div className="w-3/5 m-auto flex items-center justify-center">
          <Image src={addCardIcon} className="pt-3" alt={'create card icon'} />
          <p className="">Create virtual card</p>
        </div>

        <TransactionCard transactions={transactions} />
      </div>
    </>
  );
};

export default DashboardFull;
