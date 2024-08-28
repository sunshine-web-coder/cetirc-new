import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Media2Thumb1 from "@/app/assets/images/media-thumb3-new.png";
import Media2Thumb2 from "@/app/assets/images/media-thumb4.png";

export default function MediaBox2() {
  return (
    <>
    <section>
        <div className="container">
            <div className="grid md:grid-cols-[5fr_7fr] gap-x-[30px] items-center md:mb-[140px] mb-[60px]">
                <div className='md:order-2 md:mb-0 mb-[30px]'>
                    <h2 className='section-title mb-[30px]'><span className='font-normal'>Our Commitment to </span> <br /> Security and Data Privacy</h2>
                    <p className='mb-[20px]'>At Cetirc, we understand the importance of security and data privacy and how it affects our brand and those who trust us. This is why we adhere to strict industry standards and best practices to protect user data and palm vein signatures.</p>
                    <p className='mb-[30px]'>We are committed to maintaining solid integrity, transparency, and accountability in all aspects of our operations. Our products, Alice 1 and Alice 2, have robust encryption mechanisms for securely storing our users’ palm signatures. We also perform security audits regularly to reduce risks and vulnerabilities.</p>
                    <Link href="/getstarted" className="primary-btn">See how it works</Link>
                </div>
                <div className='h-full min-h-[360px] relative md:order-1'>
                    <Image className='object-cover rounded-l-[30px]' src={Media2Thumb1} alt="Media Thumb1" />
                </div>
            </div>

            <div className="grid md:grid-cols-[7fr_5fr] gap-x-[30px] items-center md:mb-[140px] mb-[60px]">
                <div className=''>
                    <h2 className='section-title md:mb-0 mb-[30px]'><span className='font-medium'>Our Story</span></h2>
                    <p className='mb-[20px]'>Since launching, we&apos;ve been steadfast in advancing the frontiers of palm vein biometrics and authentication technology. We’ve not slacked in our vision of developing advanced biometric solutions that address the rising identification and digital signature problems and inefficiencies. More importantly, we&apos;ve made giant strides in research, development, implementation, and partnership to establish ourselves as a trusted leader in the biometrics industry.</p>
                </div>
                <div className='h-full min-h-[360px] relative'>
                    <Image className='object-cover rounded-l-[30px]' src={Media2Thumb2} alt="Media Thumb2" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
