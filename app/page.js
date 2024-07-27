'use client';

import Image from 'next/image';
import Banner from '@/app/components/Banner/Banner';
import Products from '@/app/components/products/products';
import HowItWorks from '@/app/components/HowItWorks/HowItWorks';
import SecureId from '@/app/components/SecureId/SecureId';
import AliceMultiColumn from '@/app/components/AliceMultiColumn/AliceMultiColumn';
import ContactUs from '@/app/components/ContactUs/ContactUs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath && router.asPath.includes('#contact-us')) {
      const contactSection = document.getElementById('contact-us');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [router.asPath]);

  return (
    <>
      <Banner />
      <Products />
      <HowItWorks />
      <SecureId />
      <AliceMultiColumn />
      <div id="contact-us" className='pt-3'>
        <ContactUs />
      </div>
    </>
  );
}
