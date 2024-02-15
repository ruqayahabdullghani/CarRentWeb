"use client";
import React, { useState , Fragment } from 'react'
import {SearchManuFacturerProps} from '@types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image';
import {manufacturers} from '@/app/constants/constants';


const SearchManufacturer = ({manufacturer , setManuFacturer}: SearchManuFacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
        //search-manufacturer
  return (
    <div className='search-manufacturer' >
    <Combobox value={manufacturer} onChange={setManuFacturer} >
      <div className='relative w-full z-10' style={{position: "relative" , width:"100%" ,zIndex: "10" }}>
        {/* Button for the combobox. Click on the icon to see the complete dropdown */}
        <Combobox.Button className='absolute top-[14px]' style={{position: "absolute" ,top:"14px"}}>
          <Image
            src='/car-logo.svg'
            width={20}
            height={20}
            className='ml-4' 
            style={{marginLeft:"16px" , height: 20 , width: 20}}
            alt='car logo'
          />
        </Combobox.Button>

        {/* Input field for searching */}
        <Combobox.Input
          className='search-manufacturer__input'
          displayValue={(item: string) => item}
          onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
          placeholder='Volkswagen...'
        />

        {/* Transition for displaying the options */}
        <Transition
          as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => setQuery("")} // Reset the search query after the transition completes
        >
          <Combobox.Options style={{position: "absolute" ,marginTop:"4px" , maxHeight: "240px" ,
           width: "100%" ,overflow: "auto" , borderRadius: "0.375rem" , background: "white"}}
            className='combo'
            static
          >
            {filteredManufacturers.length === 0 && query !== "" ? (
              <Combobox.Option
                value={query}
                className='search-manufacturer__option'
              >
                Create "{query}"
              </Combobox.Option>
            ) : (
              filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  style={{position: "relative"}}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                        {item}
                      </span>

                      {/* Show an active blue background color if the option is selected */}
                      {selected ? (
                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  </div>
)
}

export default SearchManufacturer