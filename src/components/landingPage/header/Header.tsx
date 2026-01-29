'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'react-feather';

import logo from '../../../../public/assets/logo.png';
import dugihunar from '../../../../public/assets/digihunar.webp'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='shadow-custom bg-white w-full  top-0 left-0 z-50'>
      <nav className='container mx-auto flex justify-between items-center h-[80px] md:px-8 lg:px-[75px]  '>
        <div className='logo'>
          <Link href='/home'>
            <Image src={dugihunar} width={108} height={48} alt='Logo' />
          </Link>
        </div>

        <div className='md:hidden'>
          <button onClick={toggleMenu} aria-label='Toggle Menu'>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        <div className='hidden md:flex items-center gap-10'>
          <ul className='flex items-center gap-10'>
            {[
              { path: '/home', label: 'Home' },
              { path: '/home/job', label: 'Job' },
              { path: '/home/courses', label: 'Learning' },
              { path: '/home/pricing', label: 'Pricing' },
              { path: '/home/why-synkup', label: 'Why digiHunar' },
            ].map((item) => (
              <li
                key={item.label}
                className={`list-none cursor-pointer ${pathname === item.path ? 'text-[#0C5FD8] font-bold' : 'text-black'}`}
              >
                <Link href={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='hidden md:flex items-center'>
          <button className='mr-3 text-[#0C5FD8] border-none'>Login</button>
          <button className='rounded-md bg-[#0C5FD8] h-11 text-white w-[100px]'>
            Sign Up
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className='md:hidden bg-white shadow-md flex flex-col items-center gap-4 py-4'>
          <ul>
            {[
              { path: '/home', label: 'Home' },
              { path: '/home/job', label: 'Job' },
              { path: '/home/courses', label: 'Learning' },
              { path: '/home/pricing', label: 'Pricing' },
              { path: '/home/why-synkup', label: 'Why digiHUnar' },
            ].map((item) => (
              <li
                key={item.label}
                className={`list-none ${pathname === item.path ? 'text-[#0C5FD8] font-bold' : 'text-black'}`}
              >
                <Link href={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <button className='text-[#0C5FD8] border-none mt-2'>Login</button>
          <button className='rounded-md bg-[#0C5FD8] h-11 text-white w-[100px]'>
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
