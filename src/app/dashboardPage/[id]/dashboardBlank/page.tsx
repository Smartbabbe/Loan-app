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

const page = () => {

  const profileData = 
    {name: 'David Philips',
      profileimg: profileimg,
      bank: 'Research Bank',
    phoneNumber: 10123456789,}
  
  return (
    <>
      <div className="flex w-full flex-col items-center text-center">
        <Description className="mb-7" text="Welcome to Loani" />

        <Image
          src={dashboardkyc}
          className=""
          loading="eager"
          priority
          alt="hero-image"
          unoptimized={true}
        />

        <div className="w-3/4 ">
          <Description className="text-lg mb-1 mt-4" text="Complete your KYC" />
          <Description
            className="text-sm m-0 mb-4"
            text="Please complete your KYC to enjoy benefits"
          />
          <div className="pt-7">
            <Link href="/dashboardPage/1/dashboardFull" legacyBehavior>
              <a className="w-full">
                <Button className=" mb-3" buttonName="Complete your KYC" />{' '}
              </a>
            </Link>
          </div>
        </div>

        <div className='w-3/4'>
          <Description
            className="text-[16px] mt-[4rem] mb-1"
            text="Connect your bank account to track credit and debit transactions, your spending and so much more!"
          />
          <div className="pt-7 w-full">
            <Link href="/dashboardPage/page.tsx" legacyBehavior>
              <a className="">
                <Button className="p-0 mb-3" buttonName="Connect Account" />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <ProfileCard profileImage={profileimg} name={profileData.name} bank={profileData.bank} phoneNumber={profileData.phoneNumber} />

        <VirtualCard className=''>
          <Image src={addIcon} alt="Add icon" />
          <p className="text-white w-3/5 text-center font-bold text-2xl">
            Create a Virtual Card
          </p>
        </VirtualCard>
      </div>
    </>
  );
};

export default page;
