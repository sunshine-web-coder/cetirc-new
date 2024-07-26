import React from 'react'
import Link from "next/link";
import Image from "next/image";
import WhyUsIcon1 from "@/app/assets/images/why-us-icon1.svg";
import WhyUsIcon2 from "@/app/assets/images/why-us-icon2.svg";
import WhyUsIcon3 from "@/app/assets/images/why-us-icon3.svg";


export default function WhyUs() {
  return (
    <>
        <section className=''>
            <div className="container">
                <div className="flex flex-col items-center text-center lg:mb-[50px] mb-[30px]">
                    <h2 className='section-title md:mb-[20px] mb-[10px]'><span className='font-normal'>Why Use</span> <br /> Palm Vein Biometrics?</h2>
                    <p className='max-w-[830px]'>Our palm vein biometrics offer several advantages over traditional authentication methods, such as passwords, PINs, or fingerprint scans.</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-[30px] gap-[20px]">
                    {/* single box  */}
                    <div className="bg-white py-[30px] px-[20px] rounded-[23px] text-center shadow-[0_30px_60px_rgba(0,0,0,0.05)]">
                        <Image className="mb-[10px] mx-auto md:max-w-[90px] max-w-[60px]" src={WhyUsIcon1} alt="Why Us Icon 1"/>
                        <h3 className='xl:text-[30px] md:text-[24px] text-[20px] font-medium xl:mb-[30px] mb-[10px] leading-[1.3]'>High Security:</h3>
                        <p className=''>Palm vein patterns are unique to each individual and virtually impossible to replicate. This uniqueness provides a high level of security against identity theft and fraud.</p>
                    </div>
                    {/* single box  */}
                    <div className="bg-white py-[30px] px-[20px] rounded-[23px] text-center shadow-[0_30px_60px_rgba(0,0,0,0.05)]">
                        <Image className="mb-[10px] mx-auto md:max-w-[90px] max-w-[60px]" src={WhyUsIcon2} alt="Why Us Icon 2"/>
                        <h3 className='xl:text-[30px] md:text-[24px] text-[20px] font-medium xl:mb-[30px] mb-[10px] leading-[1.3]'>Contactless</h3>
                        <p className=''>Unlike fingerprint or iris scans, palm vein authentication is non-invasive and does not require physical contact, which is more hygienic and convenient.</p>
                    </div>
                    {/* single box  */}
                    <div className="bg-white py-[30px] px-[20px] rounded-[23px] text-center shadow-[0_30px_60px_rgba(0,0,0,0.05)]">
                        <Image className="mb-[10px] mx-auto md:max-w-[90px] max-w-[60px]" src={WhyUsIcon3} alt="Why Us Icon 3"/>
                        <h3 className='xl:text-[30px] md:text-[24px] text-[20px] font-medium xl:mb-[30px] mb-[10px] leading-[1.3]'>Accurate and Reliable</h3>
                        <p className=''>Palm vein identification technology is invulnerable to compromising environmental factors like dirt, moisture, temperature changes, etc., and boasts high accuracy and reliability rates.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
