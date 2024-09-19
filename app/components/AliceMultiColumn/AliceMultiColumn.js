'use client';
import React from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import backgroundShape from '@/app/assets/images/product-bg.png';
import MachineThumb from '@/app/assets/images/new-payment-machine.png';
import MachineThumbMobile from '@/app/assets/images/payment-machine-mobile.png';
import SecurityThumb from '@/app/assets/images/secure-thumb2.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

export default function AliceMultiColumn() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <>
      <section ref={ref} className="alice-multi-column relative z-10 md:pt-[70px] pt-0">
        <Image className="absolute left-0 top-0 w-full -z-10 md:block hidden" src={backgroundShape} alt="Background shape" />
        <div className="container">
          {/* first column */}
          <motion.div className="grid md:grid-cols-2" variants={stagger} initial="hidden" animate={controls}>
            <motion.div variants={fadeInUp}>
              <h2 className="2xl:text-[48px] lg:text-[36px] text-[26px] font-normal md:mb-[15px] mb-[8px]">Convenient Payments With Alice 1</h2>
              <p className="lg:text-[24px] md:text-[18px] text-[14px] md:mb-[35px] mb-[30px]">We created Alice 1 to make your POS and retail transactions seamless and quick wherever you go worldwide.</p>
              <ul className="flex flex-col md:gap-[30px] gap-[15px] lg:w-[85%] w-full">
                <motion.li className="flex lg:gap-[15px] gap-[10px] md:text-[20px] text-[14px] bg-white border border-[#A9ED12] md:rounded-[20px] rounded-[15px] py-[20px] px-[15px] mr-[50px]" variants={fadeInUp}>
                  <span className="text-[#424242] text-[16px] mt-[5px]">
                    <IoMdCheckmarkCircle />
                  </span>
                  Register once, and pay for your favorite items forever, anywhere, anytime
                </motion.li>
                <motion.li className="flex lg:gap-[15px] gap-[10px] md:text-[20px] text-[14px] bg-white border border-[#A9ED12] md:rounded-[20px] rounded-[15px] py-[20px] px-[15px] ml-[50px]" variants={fadeInUp}>
                  <span className="text-[#424242] text-[16px] mt-[5px]">
                    <IoMdCheckmarkCircle />
                  </span>
                  It’s contactless and secure: All you need to do is hover your palm on the POS device
                </motion.li>
                <motion.li className="flex lg:gap-[15px] gap-[10px] md:text-[20px] text-[14px] bg-white border border-[#A9ED12] md:rounded-[20px] rounded-[15px] py-[20px] px-[15px] mr-[50px]" variants={fadeInUp}>
                  <span className="text-[#424242] text-[16px] mt-[5px]">
                    <IoMdCheckmarkCircle />
                  </span>
                  You’re in full control: You decide where and when to use or approve your palm ID
                </motion.li>
              </ul>
            </motion.div>
            <div className="md:ml-auto flex items-center sm:items-start justify-center sm:justify-start mt-[30px] md:mt-0">
              <Image className="w-[200px] sm:w-[350px]" width={5000} height={5000} src={MachineThumb} alt="Machine Thumb Mobile" />
            </div>
          </motion.div>
          {/* second column */}
          <motion.div className="grid md:grid-cols-2 gap-[40px] md:mt-[-100px] mt-[60px]" variants={stagger} initial="hidden" animate={controls}>
            <motion.div className="mt-[150px] md:block hidden" variants={fadeInUp}>
              <Image className="" src={SecurityThumb} alt="Security Thumb" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h2 className="2xl:text-[48px] lg:text-[36px] text-[26px] font-normal mb-[30px]">Seamless Access Control With Alice 2</h2>
              <ul className="flex flex-col md:gap-[30px] gap-[15px] lg:w-[90%] w-full">
                <motion.li className="flex lg:gap-[15px] gap-[10px] md:text-[20px] text-[14px] bg-[#CAF7CE] border border-[#A0EFA6] md:rounded-[20px] rounded-[15px] py-[20px] px-[15px] mr-[50px]" variants={fadeInUp}>
                  <span className="text-[#424242] text-[16px] mt-[5px]">
                    <IoMdCheckmarkCircle />
                  </span>
                  Breeze through any restricted place, entrance, resource, or information with Alice 2.
                </motion.li>
                <motion.li className="flex lg:gap-[15px] gap-[10px] md:text-[20px] text-[14px] bg-[#CAF7CE] border border-[#A0EFA6] md:rounded-[20px] rounded-[15px] py-[20px] px-[15px] ml-[50px]" variants={fadeInUp}>
                  <span className="text-[#424242] text-[16px] mt-[5px]">
                    <IoMdCheckmarkCircle />
                  </span>
                  It’s quick, flexible, and secure: you authorize access using only your palm.
                </motion.li>
                <motion.li className="flex lg:gap-[15px] gap-[10px] md:text-[20px] text-[14px] bg-[#CAF7CE] border border-[#A0EFA6] md:rounded-[20px] rounded-[15px] py-[20px] px-[15px] mr-[50px]" variants={fadeInUp}>
                  <span className="text-[#424242] text-[16px] mt-[5px]">
                    <IoMdCheckmarkCircle />
                  </span>
                  Everyone has a unique identity, which adds extra reliability and peace of mind.
                </motion.li>
                <motion.li className="flex lg:gap-[15px] gap-[10px] md:text-[20px] text-[14px] bg-[#CAF7CE] border border-[#A0EFA6] md:rounded-[20px] rounded-[15px] py-[20px] px-[15px] ml-[50px]" variants={fadeInUp}>
                  <span className="text-[#424242] text-[16px] mt-[5px]">
                    <IoMdCheckmarkCircle />
                  </span>
                  Contactless access control service, just with your palm
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
