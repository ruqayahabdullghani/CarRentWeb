"use client";


import React, { Fragment } from 'react'
import {CarProps } from '@/types'
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { generateCarImageUrl } from '@/utils';



interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

function CarDetails({ isOpen, closeModal, car }: CarDetailsProps) {
  return (
    <>
    <Transition appear show={isOpen} as={Fragment}>
    <Dialog as='div' className='relative z-10' onClose={closeModal} style={{zIndex:"10" , position: "relative"}}>
    <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-black bg-opacity-25' style={{background: "black",  inset: "0px" , position: "fixed" , opacity: 0.25}} />
        </Transition.Child>
        <div className='fixed inset-0 overflow-y-auto'  style={{ overflowY: "auto",  inset: "0px" , position: "fixed"}}>
        <div className='flex min-h-full items-center justify-center p-4 text-center' 
        style={{display:"flex" , minHeight: "100%" , alignItems: "center" , justifyContent: "center" , padding:"16px" , textAlign: "center"}}>
        <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
                <Dialog.Panel style={{background: "white" , position: "relative" ,width:"100%", maxWidth:"90vh" ,   overflowY: "auto"}}
                 className='DialogPanel'>
                <button
                  type='button'
                  className='ButtonDialog'
                  onClick={closeModal}>
                    <Image
                    src='/close.svg'
                    alt='close'
                    width={20}
                    height={20}
                    className='object-contain' style={{objectFit: "contain"}}
                  />

                </button>
                <div className='flex-1 flex flex-col gap-3' style={{ flex: "1 1 0%" , display:"flex" , flexDirection: "column" , gap: "12px"}}>
                  <div className='DialogContanct'>
                  <Image src={generateCarImageUrl(car)} fill alt='car model' priority className='object-contain' style={{objectFit: "contain" }}/>
                  </div>

                  <div className='flex gap-3' style={{display: "flex" , gap: "12px"}}>
                    <div className='DialogImage'>
                    <Image src={generateCarImageUrl(car, "29")} fill alt='car model' priority className='object-contain' style={{objectFit: "contain" }}/>
                    </div>
                    <div className='DialogImage'>
                    <Image src={generateCarImageUrl(car, "33")} fill alt='car model' priority className='object-contain' style={{objectFit: "contain" }}/>
                    </div>
                    <div className='DialogImage'>
                    <Image src={generateCarImageUrl(car, "13")} fill alt='car model' priority className='object-contain' style={{objectFit: "contain" }}/>
                    </div>
                  </div>
                  </div>

                  <div style={{ flex:"1 1 0%" , display:"flex" , flexDirection: "column" , gap:"8px"}}>
                  <h2 className='font-semibold text-xl capitalize' style={{fontWeight: 600 ,fontSize: "20px" ,  textTransform: "capitalize"}}>
                    {car.make} {car.model}
                  </h2>

                  <div className='mt-3 flex flex-wrap gap-4' style={{marginTop: "12px" , display:"flex" ,flexWrap: "wrap" , gap:"16px" }}>
                  {Object.entries(car).map(([key, value]) => (
                      <div className='flex justify-between gap-5 w-full text-right' key={key} style={{display: "flex" ,justifyContent:"space-between" , gap: "20px" , width:"100%", textAlign:"right" }}>
                        <h4 className='text-grey capitalize' style={{color:" color: rgb(116 122 136)" , textTransform: "capitalize"}}>
                          {key.split("_").join(" ")}
                        </h4>
                        <p className='text-black-100 font-semibold' style={{fontWeight: "600" ,  color: "rgb(43 44 53 )"}}>{value}</p>
                      </div>
                    ))}
                  </div>
                  </div>


                </Dialog.Panel>
              </Transition.Child>

        </div>
          


        </div>

    </Dialog>

    </Transition>

    </>
    )
}

export default CarDetails