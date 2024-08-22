import React from 'react';
import Image from 'next/image';
import AliceWorkThumb1 from '@/app/assets/images/alice1work-thumb.png';
import AliceWorkThumbMobile from '@/app/assets/images/alice1work-thumb-mobile.png';

export default function AliceWork1() {
  return (
    <>
      <section className="md:py-[140px] py-[60px]">
        <div className="container">
          <div className="flex flex-col mb-[50px]">
            <h2 className="section-title mb-[20px]">
              <span className="font-normal">How Does</span> Alice 1 Work?
            </h2>
            <p className="">
              Alice 1 improves the retail and POS payment experiences with palm vein biometrics. <br className="lg:block hidden" /> Here&apos;s how it works:
            </p>
          </div>
          <div className="grid sm:grid-cols-[4fr_8fr] lg:gap-x-[60px] gap-x-[30px]">
            <div className="mb-[30px]">
              <Image className="w-full" src={AliceWorkThumb1} alt="AliceWorkThumb1" />
            </div>
            <div className="relative">
              {/* single work item  */}
              <div className='flex gap-x-[18px] relative lg:pb-[50px] pb-[30px] before:w-[2px] before:absolute before:h-[calc(100%-50px)] before:content-[unset] before:lg:content-[""] before:border-l-2 before:border-dashed before:top-[40px] before:left-[14px]'>
                <div className="lg:h-[30px] h-[20px] lg:w-[30px] w-[20px] lg:min-w-[30px] min-w-[20px] bg-[#C9F5CD] rounded-full"></div>
                <div>
                  <h4 className="text-[24px] md:mb-[15px] mb-[10px]">Registration:</h4>
                  <p className="text-[#646464] lg:text-[20px] text-[14px]">
                    You register your palm vein patterns using the Alice 1 app or through Cetirc-supported devices at designated registration points. Our app or device’s proprietary computer vision algorithm captures and securely stores your unique palm vein patterns during registration. This system
                    encrypts your palm image and creates your unique palm signature, readable by any of our partnering Cetirc or Alice 1 devices worldwide.
                  </p>
                </div>
              </div>
              {/* single work item  */}
              <div className='flex gap-x-[18px] relative lg:pb-[50px] pb-[30px] before:w-[2px] before:absolute before:h-full before:content-[unset] before:lg:content-[""] before:border-l-2 before:border-dashed before:top-[40px] before:left-[14px]'>
                <div className="lg:h-[30px] h-[20px] lg:w-[30px] w-[20px] lg:min-w-[30px] min-w-[20px] bg-[#C8C8C8] rounded-full"></div>
                <div>
                  <h4 className="text-[24px] md:mb-[15px] mb-[10px]">Payment:</h4>
                  <p className="text-[#646464] lg:text-[20px] text-[14px]">
                    After registration, you can make payments at partnering merchants, retail stores, or centers by simply scanning your palm at the point of sale terminal. The system compares your palm image with the palm signatures in our system to authenticate the transaction securely and
                    swiftly.
                  </p>
                </div>
              </div>
              {/* single work item  */}
              <div className="flex gap-x-[18px] relative">
                <div className="lg:h-[30px] h-[20px] lg:w-[30px] w-[20px] lg:min-w-[30px] min-w-[20px] bg-[#C8C8C8] rounded-full"></div>
                <div>
                  <h4 className="text-[24px] md:mb-[15px] mb-[10px]">What’s More?</h4>
                  <p className="text-[#646464] lg:text-[20px] text-[14px]">You unlock access to Alice 2 offerings upon completing registration with Alice 1 via the app or registration point. We intentionally made this possible to provide a seamless and integrated user experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
