'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SecureImage from '@/app/assets/images/secure-thumb.png';
import SecureImageMobile from '@/app/assets/images/secure-thumb-mobile.png';

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

export default function SecureId() {
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
      <section ref={ref} className="md:py-[120px] py-[60px]">
        <div className="container">
          <motion.div className="grid md:grid-cols-2 grid-cols-1 xl:gap-[150px] gap-[40px] items-center" variants={stagger} initial="hidden" animate={controls}>
            <motion.div className="md:order-2 md:text-left text-center" variants={fadeInUp}>
              <h2 className="section-title md:mb-[15px] mb-[8px]">
                <span className="font-normal">Grant Access, Share</span> <br />
                With Others
              </h2>
              <p className="md:mb-[30px] mb-[20px]">Allow trusted guests, friends, and family to checkout with your Alice 1-linked credit or debit card or gain access control with Alice 2. It's secure and easy; you control how third parties use your card.</p>
              <Link href="/getstarted" className="primary-btn">
                See how it works
              </Link>
            </motion.div>
            <motion.div className="md:order-1" variants={fadeInUp}>
              <Image className="md:block hidden" src={SecureImage} alt="Secure Thumb" />
              <Image className="md:hidden block w-full" src={SecureImageMobile} alt="Secure Thumb Mobile" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
