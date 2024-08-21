import React from 'react'
import Image from "next/image";
import AliceWorkIcon1 from "@/app/assets/images/alice-work-icon1.svg";

export default function AliceWork1() {
  return (
    <>
        <section className='md:pt-[140px] md:bg-[#CAF7CE] relative z-10 before:absolute before:bottom-0 before:left-0 before:h-[180px] before:w-full before:content-[""] before:bg-white before:-z-10'>
            <div className="container">
                <div className="flex items-center flex-col md:mb-[50px] mb-[30px] text-center">
                    <h2 className='section-title md:mb-[20px] mb-[10px]'><span className='font-normal'>How Does</span> <br /> Alice 2 Work</h2>
                    <p className='max-w-[830px] xl:text-[24px] lg:text-[18px] text-[14px]'>Alice 2 uses palm vein biometrics technology to authenticate access control and identification activities.</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                    {/* single box  */}
                    <div className="bg-white p-[30px] rounded-[23px] shadow-[0_30px_60px_rgba(0,0,0,0.05)] md:text-left text-center lg:mt-[40px]">
                        <Image className="mb-[10px] xl:max-w-[90px] max-w-[60px] md:mx-0 mx-auto" src={AliceWorkIcon1} alt="Alice Work Icon1"/>
                        <h3 className='xl:text-[30px] lg:text-[24px] text-[20px] font-medium xl:mb-[15px] mb-[10px] leading-[1.3]'>Access Control</h3>
                        <p className='xl:text-[20px] text-[14px]'>Alice 2 enables secure access control to restricted areas or facilities by authenticating users based on their palm signature created with Alice 1. Employees or authorized personnel can enter by scanning their palms at the designated access control points.</p>
                    </div>
                    {/* single box  */}
                    <div className="bg-white py-[30px] px-[20px] rounded-[23px] shadow-[0_30px_60px_rgba(0,0,0,0.05)] md:text-left text-center">
                        <Image className="mb-[10px] xl:max-w-[90px] max-w-[60px] md:mx-0 mx-auto" src={AliceWorkIcon1} alt="Alice Work Icon1"/>
                        <h3 className='xl:text-[30px] lg:text-[24px] text-[20px] font-medium xl:mb-[15px] mb-[10px] leading-[1.3]'>Identification</h3>
                        <p className='xl:text-[20px] text-[14px]'>Beyond access control, Alice 2 offers identity verification in various scenarios, such as attendance tracking, visitor management, or secure document access. Users can quickly, accurately, and conveniently confirm their identity by scanning their palm vein pattern.</p>
                    </div>
                    {/* single box  */}
                    <div className="bg-white py-[30px] px-[20px] rounded-[23px] shadow-[0_30px_60px_rgba(0,0,0,0.05)] md:text-left text-center lg:mt-[90px]">
                        <Image className="mb-[10px] xl:max-w-[90px] max-w-[60px] md:mx-0 mx-auto" src={AliceWorkIcon1} alt="Alice Work Icon1"/>
                        <h3 className='xl:text-[30px] lg:text-[24px] text-[20px] font-medium xl:mb-[15px] mb-[10px] leading-[1.3]'>Integration</h3>
                        <p className='xl:text-[20px] text-[14px]'>By adopting and integrating Alice 2, small and large businesses, enterprises, and organizations can improve and scale their existing security systems and protocols.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
