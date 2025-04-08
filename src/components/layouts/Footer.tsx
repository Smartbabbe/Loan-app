import React from 'react';
import Container from './Container';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <div className="text-white bg-background-secondary py-8 tracking-wide ">
        {/* main footer */}
        <Container>
          <p className="text-center text-xs py-3">
            Participating in real estate crowdfunding through our platform
            carries inherent risks. These primarily include potential property
            devaluation, difficulty in quickly converting investments to cash,
            and possible shortfalls in dividend or interest payments. While we
            strive to showcase quality opportunities, past performance
            doesn&apos;t predict future outcomes, and returns can never be
            guaranteed. We provide comprehensive details for each investment
            opportunity, including thorough risk assessments. Our platform is
            designed for investors who understand these risks and can make
            well-informed, independent decisions. Please note that we don&apos;t
            offer investment or financial advice – all opportunities listed
            should be viewed as potential options rather than recommendations.
            The investment world can be complex, and we encourage you to review
            our detailed risk guide [HERE].
          </p>
          <div className="hidden md:flex gap-10 px-8 lg:px-0 md:px-10 flex-col md:flex-row gap-y-8 my-6 md:my-10 justify-between lg:space-x-20">
            {/* Subsection 1 */}
            <div className="space-y-6 md:w-auto md:max-w-80">
              <div className="logo">
                <Image
                  alt="logo-image"
                  width={100}
                  height={100}
                  className="w-16 md:w-[100px] aspect-[2.22]"
                  src={'/Logo.png'}
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs md:text-sm font-semibold m-0">
                  Contact Number:{' '}
                  <Link
                    href="tel:+234507803281"
                    className="text-xs md:text-sm font-normal"
                  >
                    +234507803281
                  </Link>
                </p>
                <p className="text-xs md:text-sm font-semibold m-0">
                  Address:{' '}
                  <span className="break-words font-normal text-xs md:text-[13px]">
                    1 Unity Estate, Along Mowe Ofada Road, Ogun State
                  </span>
                </p>
              </div>
              {/* <div className="flex md:pt-4 flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-4"></div> */}
            </div>

            <div className="flex grow gap-x-10 justify-between">
              {/* Subbsection 2 */}
              <div className="space-y-3 md:space-y-5">
                <h6 className="mt-0">Company</h6>
                <div className="space-y-3">
                  <Link
                    href="/"
                    className="font-normal block text-xs md:text-[13px] text-foreground"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="font-normal block text-xs md:text-[13px] text-foreground"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/about"
                    className="font-normal block text-xs md:text-[13px] text-foreground"
                  >
                    Our Team
                  </Link>
                </div>
              </div>
              {/* Subsection 3 */}
              <div className="space-y-3 md:space-y-5">
                <h6 className="mt-0">Users</h6>
                <div className="space-y-2">
                  <Link
                    href="/about"
                    className="font-normal text-xs md:text-[13px] block text-foreground"
                  >
                    FAQ
                  </Link>

                  <Link
                    href="/about"
                    className="font-normal text-xs md:text-[13px] block text-foreground"
                  >
                    Career
                  </Link>
                </div>
              </div>

              {/* Subsection 4 */}
              <div className="space-y-3 md:space-y-5 w-max">
                <h6 className="mt-0">Privacy</h6>
                <div className="space-y-2">
                  <Link
                    href="/about"
                    className="font-normal text-xs md:text-[13px] block text-foreground"
                  >
                    Terms of Service
                  </Link>

                  <Link
                    href="/about"
                    className="font-normal text-xs md:text-[13px] block text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>

            {/* Subsection 5 */}
            <div className="space-y-3 md:space-y-5">
              <h6 className="mt-0">Stay Up to date</h6>
              <div className="space-y-5">
                <Link
                  href="/about"
                  className="font-normal text-xs md:text-[13px] text-foreground"
                >
                  Be the first to know about our newest apartments
                </Link>
                <Link
                  href="mailto:support@mail.com"
                  className="font-normal text-xs md:text-[13px] block text-[#49735A]"
                >
                  support@mail.com
                </Link>
                <div
                  role="button"
                  className="md:px-7 px-5 py-2 md:py-2.5 rounded-full bg-accent w-fit"
                >
                  Subscribe
                </div>
              </div>
            </div>
          </div>

          {/* STRUCTURE FOR MOBILE SCREEN */}

          <div className="md:hidden">
            {/* LOGO ON MOBILE */}
            <div className="logo flex justify-center">
              <Image
                alt="logo-image"
                width={100}
                height={100}
                className="w-32 md:w-[100px] aspect-[2.22]"
                src={'/Logo.png'}
              />
            </div>

            {/* LINKS ON MOBILE */}

            <div className="flex flex-col items-center mt-7">
              <table className="w-3/5 m-auto">
                <tbody>
                  <tr className="mb-5">
                    <td className="text-black flex justify-end text-[14px] pr-[3em] font-semibold">
                      Company
                    </td>
                    <td className="pb-6">
                      <div className="space-y-3">
                        <Link
                          href=""
                          className="font-normal block text-xs md:text-[13px] text-foreground"
                        >
                          Home
                        </Link>
                        <Link
                          href="/about"
                          className="font-normal block text-xs md:text-[13px] text-foreground"
                        >
                          About Us
                        </Link>
                        <Link
                          href="/about"
                          className="font-normal block text-xs md:text-[13px] text-foreground"
                        >
                          Our Team
                        </Link>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-black flex justify-end text-[14px] pr-[3em] font-semibold">
                      Users
                    </td>
                    <td className="pb-6">
                      <div className="space-y-3">
                        <Link
                          href="/about"
                          className="font-normal text-xs md:text-[13px] block text-foreground"
                        >
                          FAQ
                        </Link>

                        <Link
                          href="/about"
                          className="font-normal text-xs md:text-[13px] block text-foreground"
                        >
                          Career
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-black flex justify-end text-[14px] pr-[3em] font-semibold">
                      Privacy
                    </td>
                    <td className="pb-6">
                      <div className="space-y-3">
                        <Link
                          href="/about"
                          className="font-normal pb-3 -pr-6 text-xs md:text-[13px] block text-foreground"
                        >
                          Terms of Service
                        </Link>

                        <Link
                          href="/about"
                          className="font-normal text-xs md:text-[13px] block text-foreground"
                        >
                          Privacy Policy
                        </Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CALL TO ACTION SECTION */}
            <div className="space-y-3 mt-5 text-center">
              <h6 className="mt-0">Stay Up to date</h6>
              <div className="space-y-5 flex flex-col items-center">
                <Link
                  href="/about"
                  className="font-normal text-xs md:text-[13px] text-foreground"
                >
                  Be the first to know about our newest apartments
                </Link>
                <Link
                  href="mailto:support@mail.com"
                  className="font-normal text-xs md:text-[13px] block text-[#49735A]"
                >
                  support@mail.com
                </Link>
                <div
                  role="button"
                  className="md:px-7 px-5 py-2 md:py-2.5 flex justify-center rounded-full bg-accent w-fit"
                >
                  Subscribe
                </div>
              </div>
            </div>

            {/* Contact info */}

            <div className="space-y-2 mt-8 text-center">
              <p className="text-xs md:text-sm font-semibold m-0">
                Contact Number:{' '}
                <Link
                  href="tel:+234507803281"
                  className="text-xs md:text-sm font-normal"
                >
                  +234507803281
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </div>
      {/* Copyright section */}
      <div className="py-3 text-xs text-center font-normal">
        &copy; {new Date().getFullYear()} &apos;Placeholder&apos; by GrandsRois
        Verified Properties Within Limited. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
