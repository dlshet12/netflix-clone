'use client';
import Image from 'next/image';
import avatar from '../../../public/girl.png';
import logo from '../../../public/logo.svg';
import { useEffect, useState } from 'react';
export default function Navbar() {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);
  return (
    <div className=''>
      <div
        className={`top-0 w-screen h-14 px-7 py-3 flex justify-between fixed transition duration-150 ease-in ${
          show && 'bg-gray-950'
        }`}
      >
        <Image src={logo} alt='My SVG' width={200} height={200} />
        <Image src={avatar} width={30} height={30} alt='avatar' />
      </div>
    </div>
  );
}
