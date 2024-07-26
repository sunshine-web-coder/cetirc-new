import React from 'react'
import Image from "next/image";
import MediaThumb1 from "@/app/assets/images/media-thumb1.png";
import MediaThumb2 from "@/app/assets/images/media-thumb2.png";

export default function MediaBox() {
  return (
    <>
    <section className='md:py-[140px] py-[60px]'>
        <div className="container">
            <div className="grid xl:grid-cols-[4fr_8fr] lg:grid-cols-[5fr_7fr] md:grid-cols-[5fr_7fr] grid-cols-1 xl:gap-x-[50px] gap-x-[30px] items-center md:border border-[#000000] rounded-[30px] md:mb-[80px] mb-[60px]">
                <div className='h-full min-h-[360px] relative md:block hidden'>
                    <Image className='object-cover rounded-l-[30px]' fill src={MediaThumb1} alt="Media Thumb1" />
                </div>
                <div className='xl:pr-[80px] lg:pr-[30px] md:pr-[30px] pr-0 xl:py-[110px] lg:py-[60px] md:text-left text-center'>
                    <h2 className='section-title mb-[10px] font-medium'>Who We Are</h2>
                    <p>We are a premier palm vein biometric solution committed to improving how people use and interact with their identities for various applications. Our technology uses palm vein patterns to enhance security in various identity and authentication domains. Follow us through this journey,  learn about our mission, and discover the products already making this change possible.</p>
                </div>
            </div>
            <div className="grid xl:grid-cols-[8fr_4fr] lg:grid-cols-[7fr_5fr] md:grid-cols-[7fr_5fr] grid-cols-1 xl:gap-x-[50px] gap-x-[30px] items-center md:border border-[#A9ED12] rounded-[30px]">
                <div className='xl:pl-[80px] lg:pl-[30px] md:pl-[30px] pl-0 xl:py-[110px] lg:py-[60px] md:text-left text-center'>
                    <h2 className='section-title mb-[10px] font-medium'>Our Mission</h2>
                    <p><b>Our mission is straightforward:</b> to provide secure, convenient, and reliable palm vein biometric and authentication solutions that empower individuals and organizations worldwide. We use the latest technologies and tools to streamline the process and improve user experiences across various industries that need secure authentication methods.</p>
                </div>
                <div className='h-full min-h-[360px] relative md:block hidden'>
                    <Image className='object-cover rounded-r-[30px]' fill src={MediaThumb2} alt="Media Thumb2" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
