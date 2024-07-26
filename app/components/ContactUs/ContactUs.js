'use client';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

export default function ContactUs() {
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
      <section ref={ref} className='md:bg-[#F6FCEA] md:py-[100px] mt-[80px]'>
        <div className="container">
          <motion.div
            className="grid md:grid-cols-2 xl:gap-[180px] lg:gap-[100px] gap-[50px]"
            variants={stagger}
            initial="hidden"
            animate={controls}
          >
            <motion.div className='md:text-left text-center' variants={fadeInUp}>
              <div className="subtitle">
                <span></span>
                <p>Contact US</p>
              </div>
              <h2 className="section-title !leading-[1.3] mb-[20px]">
                <span className='font-normal'>Supercharge Your Business With</span> <br /> Alice 1 & Alice 2
              </h2>
              <p>
                We designed Alice 1 and 2 palm ID services to streamline your business by making transactions, payments, and access control smooth and secure. To get our enterprise hardware or enterprise software products, kindly message us directly, and we&apos;ll walk you through it all.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <form action='#' className='contact_form grid gap-[20px]'>
                <div className="grid grid-cols-2 md:gap-[20px] gap-[10px]">
                  <div className="form-group">
                    <input className='border border-[#8E8E8E] bg-transparent md:rounded-[11px] rounded-[6px] md:leading-[50px] leading-[40px] px-[20px] w-full text-[16px] font-normal' type="text" name="f_name" id="f_name" placeholder='First name' />
                  </div>
                  <div className="form-group">
                    <input className='border border-[#8E8E8E] bg-transparent md:rounded-[11px] rounded-[6px] md:leading-[50px] leading-[40px] px-[20px] w-full text-[16px] font-normal' type="text" name="l_name" id="l_name" placeholder='Last name' />
                  </div>
                </div>
                <div className="grid">
                  <div className="form-group">
                    <input className='border border-[#8E8E8E] bg-transparent md:rounded-[11px] rounded-[6px] md:leading-[50px] leading-[40px] px-[20px] w-full text-[16px] font-normal' type="email" name="email" id="email" placeholder='Enter email' />
                  </div>
                </div>
                <div className="grid">
                  <div className="form-group">
                    <input className='border border-[#8E8E8E] bg-transparent md:rounded-[11px] rounded-[6px] md:leading-[50px] leading-[40px] px-[20px] w-full text-[16px] font-normal' type="text" name="tel" id="tel" placeholder='Phone number (optional)' />
                  </div>
                </div>
                <div className="grid">
                  <div className="form-group">
                    <textarea className='border border-[#8E8E8E] bg-transparent rounded-[11px] p-[20px] w-full text-[16px] font-normal h-[180px]' name="message" id="message" placeholder='Write your message here'></textarea>
                  </div>
                </div>
                <div className="grid justify-end">
                  <div className="form-group">
                    <button className='primary-btn' type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
