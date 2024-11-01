'use client';
// components/Navbar.js

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseFill, RiCloseLine } from 'react-icons/ri';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed z-50 bg-white mt-10 top-0 left-0 right-0 p-4 flex items-center justify-between max-w-7xl h-12 md:h-16 mx-4 md:mx-auto ${
        isMenuOpen ? 'rounded-t-3xl' : 'rounded-full shadow-md'
      }`}
    >
      {/* Logo */}
      <div className="w-40 h-12 relative">
        <Image src="/logo.svg" fill alt="Logo" className="object-contain" />
      </div>

      {/* Hamburger Menu Icon */}
      <button
        className="block md:hidden h-8 w-8 mr-3"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <RiCloseFill size={24} /> : <RxHamburgerMenu size={24} />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? 'block rounded-b-2xl bg-white pt-2' : 'hidden'
        } md:flex absolute md:static top-11 left-0 w-full md:w-auto md:bg-transparent shadow-md md:shadow-none md:space-x-6`}
      >
        <li className="p-4 md:p-0">
          <Link href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
        </li>
        <li className="p-4 md:p-0">
          <Link href="/about" className="text-gray-700 hover:text-blue-500">
            About Us
          </Link>
        </li>
      </ul>

      {/* CTA Button */}
      <div className="hidden md:block">
        <Button variant="primary" href="/contact" label="Contact Us" />
      </div>
    </nav>
  );
}
