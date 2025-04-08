import { Content } from 'next/font/google';
import React, { ReactNode } from 'react';
import Image from 'next/image';
import Description from '../Forms/DescriptionTag';
import editIcon from '@/assets/edit.svg';
import { StaticImageData } from 'next/image';

interface ProfileCardProps {
  className?: string;
  profileImage?: StaticImageData;
  name?: string;
  bank?: string;
  phoneNumber?: number;
}

const ProfileCard = ({
  className = '',
  profileImage,
  name,
  bank,
  phoneNumber,
}: ProfileCardProps) => {
  return (
    <div className={`w-full flex justify-center my-5  ${className}`}>
      <div
        className={`w-3/5 relative p-2 m-auto shadow-xl bg-white flex flex-col items-center h-52 rounded-lg ${className}`}
      >
        {profileImage && (
          <Image
            src={profileImage}
            className="pt-2 rounded-full"
            alt="profile image"
            width={100}
            height={100}
          />
        )}
        <Description text={`${name}`} className={'mb-0 mt-2'} />
        <p className="mt-0">{bank}</p>
        <p>{phoneNumber}</p>
        <Image
          src={editIcon}
          className="absolute top-3 right-1"
          alt="profile image"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
