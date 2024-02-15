import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from '@/app/constants/constants';

const Footer = () => {
  return (
    <footer className="footer  border-t border-gray-100">
    <div className="footer__content">
      <div className="footer__logo">
      <a href='/' className='flex justify-center items-center' style={{display: "flex" , justifyContent: "center" , alignItems: "center" , marginRight:"10px"}}>
      <Image src='/logo.svg' className='object-contain' alt='logo'
        width={118}
        height={18}/>
    </a>
      </div>
      <nav className="footer__nav">
        <ul className="footer__links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div className="footer__copyright">
      <p>@2024 CarHub. All rights reserved.</p>
      <a href="https://www.linkedin.com/in/ruqayah-abdullghani" style={{marginBottom:"3px", textDecoration: "none"}} className='LinkedLink'>
  By Ruqayah Abdullghani
</a>



    </div>
  </footer>

  )
}

export default Footer