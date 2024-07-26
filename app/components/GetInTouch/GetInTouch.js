import React from 'react'
import Link from "next/link";

export default function GetInTouch() {
  return (
    <>
    <section className='xl:pt-[90px] bg-[#FBFFF4] lg:mt-[220px] md:mt-[120px] xl:py-0 md:py-[80px] py-[60px] md:mb-[140px]'>
        <div className="container">
            <div className="grid lg:grid-cols-[5fr_7fr] xl:gap-x-[150px] lg:gap-[50px] gap-[30px] xl:items-start items-center">
                <div className="flex flex-col mb-[50px] lg:text-left text-center">
                    <h2 className='section-title max-w-[550px] mb-[5px] font-normal'>Get in touch</h2>
                    <p className='xl:text-[24px] lg:text-[18px] text-[14px] text-[#5E5E5E] lg:mb-[30px] mb-[15px]'>Ready to experience the future of biometric authentication with Cetirc? Contact us today to learn more about our products and services.</p>
                    <div className="flex items-center xl:gap-8 gap-4 lg:justify-start justify-center">
                        <Link href="/" className="primary-btn">Contact us</Link>
                        <Link href="/" className="bordered-btn">Get Started</Link>
                    </div>
                </div>
                <div className='md:py-[55px] py-[30px] md:px-[50px] px-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] md:rounded-[30px] rounded-[15px] bg-white xl:-translate-y-[220px]'>
                    <h2 className='section-title max-w-[550px] mb-[5px] font-normal lg:text-left text-center'>Cetirc in the News</h2>
                    <p className='xl:text-[24px] lg:text-[18px] text-[14px] text-[#5E5E5E] lg:mb-[30px] mb-[15px] lg:text-left text-center'>Get Cetirc newsletters, annual reports, blogs, and articles.</p>
                    <form action="#">
                        <div className="form-group md:mb-[30px] mb-[15px]">
                            <input className='border border-[#ABABAB] bg-transparent rounded-[11px] xl:leading-[70px] leading-[50px] px-[30px] w-full text-[16px] font-normal' type="email" name="email" id="email" placeholder='Enter email'/>
                        </div>
                        <div className="form-group text-right">
                            <button className='primary-btn' type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
