import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BannerLinesBg from '@/app/assets/images/banner-lines-bg.png';
import ProductBannerThumb from '@/app/assets/images/product-banner-thumb.png';
import ProductBannerThumbMobile from '@/app/assets/images/product-banner-thumb-mobile-new.png';

export default function GetStartedBanner() {
  return (
    <>
      <section className="banner-area relative z-10 overflow-hidden md:pt-[160px] pt-[120px] md:pb-[40px] pb-0">
        <div className="container">
          <div className="md:grid grid-cols-2 items-center md:text-left text-center">
            <div className="z-30">
              <h1 className="main-title !leading-[1.4] mb-[15px]">
                <span className="xl:text-[48px] lg:text-[36px] text-[26px] font-normal">Getting Started With </span> <br /> Alice 1 and Alice 2
              </h1>
              <p className="text-[#070707] max-w-[600px] mb-[10px]">Cetirc establishes palm vein biometrics with flagship products, Alice 1 and Alice 2. Whether you seek secure payment or advanced access control and identification, our solutions cover all that and more. </p>
              <p className="text-[#070707] max-w-[600px] mb-[30px]">This guide explores Alice 1 and Alice 2 and shows you their uniqueness, security and privacy assurances, and everything you need to get started.</p>
            </div>
            <div className="relative z-50 xl:-ml-[140px] lg:-ml-[100px] md:-ml-[50px] ml-0">
              <Image className="md:block hidden" src={ProductBannerThumb} alt="Banner Thumb" />
              <Image className="md:hidden block w-full" src={ProductBannerThumbMobile} alt="Banner Thumb Mobile" />
            </div>
          </div>
        </div>
        <Image className="absolute top-0 right-0 z-20 h-full md:block hidden" src={BannerLinesBg} alt="Banner Lines Bg" />
      </section>
    </>
  );
}
