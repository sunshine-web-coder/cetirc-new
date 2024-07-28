import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BannerLinesBg from '@/app/assets/images/banner-lines-bg2.png';
import AboutBannerThumb from '@/app/assets/images/about-banner-thumb.png';
import AboutBannerThumbMobile from '@/app/assets/images/about-banner-thumb-mobile.png';

export default function AboutBanner() {
  return (
    <>
      <section className="banner-area relative z-10 overflow-hidden pt-[150px]">
        <div className="container relative z-30">
          <div className="text-center">
            <h1 className="main-title !leading-[1.4] sm:!leading-[1.2] md:mb-[15px] mb-[10px]">
              <span className="xl:text-[48px] lg:text-[36px] text-[26px] font-normal">The Secure Way to Identify and</span> <br /> Pay for Anything
            </h1>
            <p className="text-[#070707] max-w-[1000px] md:mb-[30px] mb-[20px] mx-auto">Our highly secure palm vein biometrics technology helps millions of people and businesses authenticate payments and access control systems worldwide.</p>
            <div className="flex items-center justify-center mb-[20px]">
              <Link href="/getstarted" className="primary-btn">
                Get started
              </Link>
            </div>
            <Image className="md:block hidden" src={AboutBannerThumb} alt="About Banner Thumb" />
            <Image className="md:hidden block w-full" src={AboutBannerThumbMobile} alt="About Banner Thumb Mobile" />
          </div>
        </div>
        <Image className="absolute top-0 right-0 z-20 w-full h-auto md:block hidden" src={BannerLinesBg} alt="Banner Lines Bg" />
      </section>
    </>
  );
}
