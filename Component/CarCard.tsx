"use client";

import React, { use, useState } from 'react'
import {CarProps } from '@/types'
import {calculateCarRent, generateCarImageUrl} from "@/utils"
import Image from 'next/image';
import { CarDetails, CustomButton } from '.';

interface CarCardProps {
  car: CarProps;
}


const CarCard = ({car} :CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen , setIsOpen] = useState(false);



  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className='car-card__content'>
        <h2 className="car-card__content-title">{make} {model}</h2>
      </div>
      <p style={{display: "flex" , marginTop:"24px" , fontSize: "32px" ,   lineHeight: "38px" , fontWeight: 800}}>
      <span style={{  alignSelf: "flex-start" , fontSize: "14px", lineHeight: "17px", fontWeight: 600 }}>$</span>
        {carRent}
        <span style={{  alignSelf: "flex-end" , fontSize: "14px", lineHeight: "17px", fontWeight: 600 }}>
          /day
          </span>
      </p>

      <div style={{position: "relative" , width: "100%" , height:"160px",  objectFit: "contain" , marginTop: "12px" , marginBottom:"12px"}}>
        <Image src={generateCarImageUrl(car)} fill alt='car model' priority className='object-contain' style={{objectFit: "contain" }}/>
      </div>

      <div style={{position: "relative" , display: "flex" , width:"100%",marginTop: 2 }}>
        <div className='divclass'>
          <div className='flex flex-col justify-center items-center gap-2'
           style={{display: "flex" , flexDirection: "column" , justifyContent: 'center' , alignItems: "center" , gap: "8px"}}>
            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
            <p className='text-[14px] leading-[17px]' style={{fontSize: "14px" ,lineHeight: "17px"}}>
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className='flex flex-col justify-center items-center gap-2'
           style={{display: "flex" , flexDirection: "column" , justifyContent: 'center' , alignItems: "center" , gap: "8px"}}>
            <Image src="/tire.svg" width={20} height={20} alt='steering wheel' />
            <p className='text-[14px] leading-[17px]' style={{fontSize: "14px" , lineHeight: "17px"}}>
            {drive.toUpperCase()}
            </p>
          </div>

          <div className='flex flex-col justify-center items-center gap-2'
           style={{display: "flex" , flexDirection: "column" , justifyContent: 'center' , alignItems: "center" , gap: "8px"}}>
            <Image  src="/gas.svg" width={20} height={20} alt='steering wheel' />
            <p className='text-[14px] leading-[17px]' style={{fontSize: "14px" , lineHeight: "17px"}}>
            {city_mpg} MPG
            </p>
          </div>
        </div>

        <div className="car-card__btn-container">
        <CustomButton
            title='View More'
            containerStyles='ViewMore'
            textStyles='ViewMoreText'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
            
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  )
}

export default CarCard