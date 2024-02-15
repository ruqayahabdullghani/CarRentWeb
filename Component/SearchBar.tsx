"use client";


import React, { useState } from 'react'
import { SearchManufacturer } from '.'
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit'  className={` ${otherClasses}`} style={{ marginLeft: "-12px" ,zIndex: "10" , }}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      style={{height: 40 , width:40 , objectFit: "contain" , zIndex: "10"}}
      className='object-contain'
    />
  </button>
);

function SearchBar() {
  const [manufacturer , setManuFacturer] = useState('');
  const [model , setModel] = useState('');
  const router = useRouter();


  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };


  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if(model){
      searchParams.set('model' , model)
    } else{
      searchParams.delete('model')
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
       searchParams.delete("manufacturer");
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname);
  }
  return (
    <form className='searchbar' style={{display: "flex" }} onSubmit={handleSearch}>
      <div className='searchbar__item' style={{display: "flex"}}>
      <SearchManufacturer 
         manufacturer={manufacturer}
         setManuFacturer={setManuFacturer}/>

         <SearchButton otherClasses="seacrhOtherClasssmall"/>
      </div>
      <div className='searchbar__item ' style={{display: "flex"}}>
      <Image
          src='/model-icon.png'
          style={{position: "absolute" , width:"20px" , height:"20px" , marginLeft: "16px"}}
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan...'
          className='search-manufacturer__input ' style={{display: "flex"}}
        />
        <SearchButton otherClasses='seacrhOtherClasssmall' />
      </div>
      <SearchButton otherClasses='seacrhOtherClass' />
    </form>
    )
}

export default SearchBar