"use client";

import React from 'react'
import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@types";
import { updateSearchParams } from "@/utils";
import { CustomButton } from '.';

function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) *10;
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname);
  }
  return (
    <div className="w-full flex-center gap-5 mt-10" style={{width:"100%",gap: "1.25rem" , marginTop: "40px" , display: "flex" , alignContent:"center"}}>
             {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}

    </div>
  )
}

export default ShowMore