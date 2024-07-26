import Image from "next/image";
import Banner from "@/app/components/Banner/Banner";
import Products from "@/app/components/Products/Products";
import HowItWorks from "@/app/components/HowItWorks/HowItWorks";
import SecureId from "@/app/components/SecureId/SecureId";
import AliceMultiColumn from "@/app/components/AliceMultiColumn/AliceMultiColumn";
import ContactUs from "@/app/components/ContactUs/ContactUs";
 

export default function Home() {
  return (
    <>
      <Banner />
      <Products />
      <HowItWorks />
      <SecureId />
      <AliceMultiColumn />
      <ContactUs />
    </>
  );
}
