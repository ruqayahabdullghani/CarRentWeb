"use client";
import React from 'react'
import Image from 'next/image';
import { CustomButton } from '.';
import Car from "../public/backGCar.jpg"

const Hero = () => {

  const handleScroll = () => {

  };
  return (
<>
<section className="bg-white ">
        <div className="heroSection">
            <div className="heroContioner">
                <div className="heroContionerTwo">
                    <h1 className="heroText">
                    Find, book, rent a car—quick and super easy!
                    </h1>
                    <p className="heroP">
                      <span> Streamline your car rental experience with our effortless booking
                        process.</span>
                        </p>

                </div>

                <div className="joinUssec">
                <CustomButton title="Explore Cars" containerStyles="bg-primary-blue text-white rounded-full mt-10" 
                handleClick={handleScroll}/>
                  
                </div>
            </div>
    
            <div className="heroImageContiner">
                <Image className="heroImage" src={Car} alt="glasses photo"/>
            </div>
        </div>
    </section>


</>
  )
}

export default Hero