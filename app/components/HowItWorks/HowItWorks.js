'use client';
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WorksIcon1 from "@/app/assets/images/works-icon.svg";
import WorksIcon2 from "@/app/assets/images/works-icon2.svg";
import WorksIcon3 from "@/app/assets/images/works-icon3.svg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    }
  }
};

export default function HowItWorks() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <>
        <section ref={ref} className='md:py-[80px] py-0'>
            <div className="container">
                <motion.div
                  className="flex flex-col items-center text-center mb-[50px]"
                  variants={stagger}
                  initial="hidden"
                  animate={controls}
                >
                    <motion.div className="subtitle" variants={fadeInUp}>
                        <span></span>
                        <p>How it works</p>
                    </motion.div>
                    <motion.h2 className='section-title max-w-[550px] mb-[5px]' variants={fadeInUp}>
                      <span className='font-normal'>Initiate Your</span> Secure Experience
                    </motion.h2>
                    <motion.p className='text-[24px] text-[#5E5E5E] mb-[30px]' variants={fadeInUp}>
                      This is all you need to get started
                    </motion.p>
                    <motion.div className="flex items-center xl:gap-8 gap-4" variants={fadeInUp}>
                        <Link href="/getstarted" className="primary-btn">Get started</Link>
                        <Link href="/Cetric.apk" className="bordered-btn">Download app</Link>
                    </motion.div>
                </motion.div>
                <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4" variants={stagger} initial="hidden" animate={controls}>
                    {/* single box  */}
                    <motion.div className="bg-[#CAF7CE] md:py-[45px] py-[25px] md:px-[30px] px-[20px] xl:rounded-[43px] rounded-[20px] text-center" variants={fadeInUp}>
                        <Image className="xl:mb-[10px] mb-[5px] mx-auto md:max-w-[105px] max-w-[60px]" src={WorksIcon1} alt="Works Icon1"/>
                        <h3 className='xl:text-[30px] sm:text-[24px] text-[20px] font-normal mb-[15px] leading-[1.3]'>
                          Download the Alice 1 App for Free:
                        </h3>
                        <p className='text-[#121212] sm:text-[16px] text-[14px]'>
                          Download and Register with Alice 1 to create an online profile and ID across all Cetirc palm vein and biometric products and partners. This includes Alice 2.
                        </p>
                    </motion.div>
                    {/* single box  */}
                    <motion.div className="bg-[#CAF7CE] md:py-[45px] py-[25px] md:px-[30px] px-[20px] xl:rounded-[43px] rounded-[20px] text-center" variants={fadeInUp}>
                        <Image className="xl:mb-[10px] mb-[5px] mx-auto md:max-w-[105px] max-w-[60px]" src={WorksIcon2} alt="Works Icon2"/>
                        <h3 className='xl:text-[30px] sm:text-[24px] text-[20px] font-normal mb-[15px]'>
                          Registration and Biometrics
                        </h3>
                        <p className='text-[#121212] sm:text-[16px] text-[14px]'>
                          Complete KYC and basic biometrics and gain access to tier-1 and 2 offerings, which includes making payments.
                        </p>
                    </motion.div>
                    {/* single box  */}
                    <motion.div className="bg-[#CAF7CE] md:py-[45px] py-[25px] md:px-[30px] px-[20px] xl:rounded-[43px] rounded-[20px] text-center" variants={fadeInUp}>
                        <Image className="xl:mb-[10px] mb-[5px] mx-auto md:max-w-[105px] max-w-[60px]" src={WorksIcon3} alt="Works Icon3"/>
                        <h3 className='xl:text-[30px] sm:text-[24px] text-[20px] font-normal mb-[15px]'>
                          Activate Your Profile With the Alice 1
                        </h3>
                        <p className='text-[#121212] sm:text-[16px] text-[14px]'>
                          Activate your profile with the Alice 1 device, and enjoy Cetirc’s full benefits and premium offerings, including restricted access control and point-of-sale (POS) payments.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    </>
  )
}
