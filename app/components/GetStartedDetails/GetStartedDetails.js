import React from 'react'
import Image from "next/image";
import GetStartedDetailsIcon1 from "@/app/assets/images/product-details-icon1.svg";
import GetStartedDetailsIcon2 from "@/app/assets/images/product-details-icon2.svg";
import GetStartedDetailsIcon3 from "@/app/assets/images/product-details-icon3.svg";
import GetStartedDetailsIcon4 from "@/app/assets/images/product-details-icon4.svg";


export default function GetStartedDetails() {
  return (
    <>
        <section className='md:py-[140px] py-[60px]'>
            <div className="container">
                <div className="relative z-10 text-center mb-[40px]">
                    <div className="subtitle inline-block !mb-[20px]">
                        <span></span>
                        <p>Product Details</p>
                    </div>
                    <h2 className='section-title mb-[20px]'><span className='font-normal'>Exploring</span> Alice 1 and Alice 2</h2>
                    <p>&quot;Alice 1 and Alice 2 are cutting-edge palm vein identification services developed by Cetirc. Both products use palm vein biometrics, one of today&apos;s most secure and accurate biometric authentication methods.</p>
                </div>
                <div className="grid xl:grid-cols-3 sm:grid-cols-2 xl:gap-y-[60px] gap-y-[20px] xl:gap-x-[120px] gap-x-[20px]">
                    {/* single details box */}
                    <div className='md:text-left text-center'>
                        <div className="md:flex items-center gap-[20px] md:mb-[20px] mb-[8px]">
                            <Image className="lg:h-[70px] h-[60px] lg:w-[70px] w-[60px] lg:min-w-[70px] min-w-[60px] md:mx-0 mx-auto md:mb-0 mb-[20px]" src={GetStartedDetailsIcon1} alt="Product Details Icon"/>
                            <h4 className='lg:text-[24px] text-[20px] font-medium'>Alice 1 Features</h4>
                        </div>
                        <p className='lg:text-[18px] text-[14px] text-[#686868]'>&quot;Use Alice 1 for secure palm vein payment services at POS and retail stores.&quot;</p>
                    </div>
                    {/* single details box */}
                    <div className='md:text-left text-center'>
                        <div className="md:flex items-center gap-[20px] md:mb-[20px] mb-[8px]">
                            <Image className="lg:h-[70px] h-[60px] lg:w-[70px] w-[60px] lg:min-w-[70px] min-w-[60px] md:mx-0 mx-auto md:mb-0 mb-[20px]" src={GetStartedDetailsIcon1} alt="Product Details Icon 1"/>
                            <h4 className='lg:text-[24px] text-[20px] font-medium'>Alice 2 Features</h4>
                        </div>
                        <p className='lg:text-[18px] text-[14px] text-[#686868]'>&quot;Alice 2 offers advanced access control and identification capabilities.&quot;</p>
                    </div>
                    {/* single details box */}
                    <div className='md:text-left text-center'>
                        <div className="md:flex items-center gap-[20px] md:mb-[20px] mb-[8px]">
                            <Image className="lg:h-[70px] h-[60px] lg:w-[70px] w-[60px] lg:min-w-[70px] min-w-[60px] md:mx-0 mx-auto md:mb-0 mb-[20px]" src={GetStartedDetailsIcon2} alt="Product Details Icon 2"/>
                            <h4 className='lg:text-[24px] text-[20px] font-medium'>Registration</h4>
                        </div>
                        <p className='lg:text-[18px] text-[14px] text-[#686868]'>&quot;Register with the Alice 1 app or offline using our Cetirc biometrics device. The app is free to download and easy to use.&quot;</p>
                    </div>
                    {/* single details box */}
                    <div className='md:text-left text-center'>
                        <div className="md:flex items-center gap-[20px] md:mb-[20px] mb-[8px]">
                            <Image className="lg:h-[70px] h-[60px] lg:w-[70px] w-[60px] lg:min-w-[70px] min-w-[60px] md:mx-0 mx-auto md:mb-0 mb-[20px]" src={GetStartedDetailsIcon3} alt="Product Details Icon 3"/>
                            <h4 className='lg:text-[24px] text-[20px] font-medium'>Biometric Authentication</h4>
                        </div>
                        <p className='lg:text-[18px] text-[14px] text-[#686868]'>&quot;Both products use palm vein biometrics, one of today&apos;s most secure and accurate authentication methods.&quot;</p>
                    </div>
                    {/* single details box */}
                    <div className='md:text-left text-center'>
                        <div className="md:flex items-center gap-[20px] md:mb-[20px] mb-[8px]">
                            <Image className="lg:h-[70px] h-[60px] lg:w-[70px] w-[60px] lg:min-w-[70px] min-w-[60px] md:mx-0 mx-auto md:mb-0 mb-[20px]" src={GetStartedDetailsIcon4} alt="Product Details Icon 4"/>
                            <h4 className='lg:text-[24px] text-[20px] font-medium'>Cost Information </h4>
                        </div>
                        <p className='lg:text-[18px] text-[14px] text-[#686868]'>&quot;Alice 1 hardware and Alice 2 access control come at competitive prices for enterprise/business use.&quot;</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
