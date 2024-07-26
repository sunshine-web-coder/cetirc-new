import React from 'react'
import Image from "next/image";
import SecurityImage from "@/app/assets/images/security-thumb.png"

export default function Security() {
  return (
    <>
        <section className='md:py-[120px] pt-[60px] pb-0'>
            <div className="container">
                <div className="grid md:grid-cols-[5fr_7fr] gap-x-[50px] items-center">
                    <div className='md:mb-0 mb-[30px]'>
                        <Image className="" src={SecurityImage} alt="Security Thumb"/>
                    </div>
                    <div>
                        <h2 className="section-title mb-[15px]"><span className='font-normal'>Security and Data Privacy on</span> <br /> Alice 1 and Alice 2</h2>
                        <p className='mb-[30px]'>At Cetirc, we prioritize your security and data privacy and ensure that Alice 1 and Alice 2 adhere to uncompromising security standards. Additionally, both products employ robust encryption techniques to safeguard user data and palm signatures.
                        For more context, access to sensitive information is strictly controlled and monitored to prevent unauthorized access or misuse. In fact, you control when and where to authenticate payments and access control with your palm signature.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
