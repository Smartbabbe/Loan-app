import Button from '@/components/ui/Button';
import ProfileCard from '@/components/ui/Dashboard/ProfileCard';
import VirtualCard from '@/components/ui/Dashboard/VirtualCard';
import Description from '@/components/ui/Forms/DescriptionTag';
import Link from 'next/link';
import Image from 'next/image';
import dashboardkyc from '@/assets/dashboardkyc.svg';
import addIcon from '@/assets/addicon.svg';
import React from 'react';
import profileimg from '@/assets/dashboardprofileimg.svg'

const Page = () => {

  const profileData = 
    {name: 'David Philips',
      profileimg: profileimg,
      bank: 'Research Bank',
    phoneNumber: 10123456789,}
  
  return (
    <>
      <div className="flex w-full flex-col order-2 lg:order-1 items-center text-center">
        <Description className="absolute lg:relative top-[5rem] lg:top-0 " text="Welcome to Loani" />

        <Image
          src={dashboardkyc}
          className=""
          loading="eager"
          priority
          alt="hero-image"
          unoptimized={true}
        />

        <div className="lg:w-3/4">
          <Description className="text-lg mb-1 mt-4" text="Complete your KYC" />
          <Description
            className="text-sm m-0 mb-4"
            text="Please complete your KYC to enjoy benefits"
          />
          <div className="pt-7">
            <Link href="/dashboardPage/1/dashboardFull" legacyBehavior>
              <a className="w-full">
                <Button className="text-sm md:text-2xl mb-3" buttonName="Complete your KYC" />{' '}
              </a>
            </Link>
          </div>
        </div>

        <div className='sm:max-lg:w-3/5 lg:w-3/4'>
          <Description
            className="text-[16px] mt-[4rem] mb-1 leading-[25px]"
            text="Connect your bank account to track credit and debit transactions, your spending and so much more!"
          />
          <div className="pt-7">
            <Link href="/dashboardPage/page.tsx" legacyBehavior>
              <a className="w-full">
                <Button className="mb-3 text-sm md:text-2xl" buttonName="Connect Account" />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full lg:order-2 mt-5 lg:mt-0 flex flex-col items-center">
        <ProfileCard profileImage={profileimg} name={profileData.name} bank={profileData.bank} phoneNumber={profileData.phoneNumber} />

        <VirtualCard className=''>
          <Image src={addIcon} alt="Add icon" />
          <p className="text-white w-4/5 text-center font-bold text-2xl">
            Create a Virtual Card
          </p>
        </VirtualCard>
      </div>
    </>
  );
};

export default Page;
