"use client";

import {CustomButtonProps} from "@/types"
import Image from "next/image";

const CustomButton = ({containerStyles, title, handleClick , btnType , textStyles , rightIcon , isDisabled}: CustomButtonProps) => {
  return (
    <button disabled={false} 
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`} 
    onClick={handleClick}>

      <span className={`flex-1 ${textStyles}`}>
        {title} 
      </span>
    {rightIcon && (
      <div className="h-6 w-6" style={{position: "relative",display:"flex", width: "24px" , height: "24px" , marginLeft: "7px"}}>
        <Image src={rightIcon} alt="right icon" fill className="object-contain"/>

      </div>
    )}


    </button>
    )
}

export default CustomButton