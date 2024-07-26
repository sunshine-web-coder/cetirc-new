import React from "react";
import ProductBanner from "@/app/components/ProductBanner/ProductBanner";
import ProductDetails from "@/app/components/ProductDetails/ProductDetails";
import WhyUs from "@/app/components/WhyUs/WhyUs";
import AliceWork1 from "@/app/components/AliceWork1/AliceWork1";
import AliceWork2 from "@/app/components/AliceWork2/AliceWork2";
import Security from "@/app/components/Security/Security";
import Cta from "@/app/components/Cta/Cta";

const ProductPage = () => {
  return (
    <div>
      <ProductBanner />
      <ProductDetails />
      <WhyUs />
      <AliceWork1 />
      <AliceWork2 />
      <Security />
      <Cta />
    </div>
  );
};

export default ProductPage;