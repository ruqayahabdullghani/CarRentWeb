"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";

import { CustomFilterProps } from "@types";
import { updateSearchParams } from "@/utils";

export const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName);
  }

  
  return (
    <div style={{width:"fit-content"}} className="w-fit">
      <Listbox    value={selected}
        onChange={(e) => {
          setSelected(e); 
          handleUpdateParams(e); 
        }}>
        <div style={{position:"relative" , width: "fit" , zIndex:"10"}}>
          <Listbox.Button className='custom-filter__btn'>
          <span className='block truncate' style={{display:"block" ,overflow: "hidden",textOverflow: "ellipsis",whiteSpace: "nowrap"}}>{selected.title}</span>
          <Image src='/chevron-up-down.svg' width={20} height={20} className='ml-4 object-contain' alt='chevron_up-down' />
          </Listbox.Button>
          <Transition as={Fragment} 
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
               <Listbox.Options className='custom-filter__options'>
               {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  style={{position: "relative" , cursor:" default" , userSelect: "none" ,  paddingTop: "0.5rem",paddingBottom: "0.5rem" ,  paddingLeft: "1rem", paddingRight: "1rem" }}
                  className="activselect"
                  value={option}>
                  {({ selected }) => (
                    <>
                      <span  style={{ display: "block", overflow: "hidden",textOverflow: "ellipsis", whiteSpace: "nowrap",
                      ...(selected ? { fontWeight: "bold" } : {})}}>
            
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
                
               </Listbox.Options>
          </Transition>

        </div>
      </Listbox>

    </div>
  )
}
