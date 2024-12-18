'use client';
// components/Navbar.js

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseFill } from 'react-icons/ri';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 mx-10 mt-10 flex h-12 items-center justify-between bg-white p-4 md:h-16 lg:mx-auto lg:max-w-4xl 2xl:mx-auto 2xl:max-w-7xl ${
        isMenuOpen ? 'rounded-t-3xl' : 'rounded-full shadow-md'
      }`}
    >
      {/* Logo */}
      <Link href="/" className="relative h-12 w-40">
        <Image
          src="https://sharans1998.github.io/yonitara-ui/logo.svg"
          fill
          alt="Logo"
          className="object-contain"
        />
      </Link>
      {/* Hamburger Menu Icon */}
      <button
        className="mr-3 block h-8 w-8 md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <RiCloseFill size={24} /> : <RxHamburgerMenu size={24} />}
      </button>
      {/* Navigation Links Large Screen */}
      <div className="hidden space-x-6 md:flex">
        <Link href="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-500">
          About Us
        </Link>
        <Link
          href="/teachers-training"
          className="text-gray-700 hover:text-blue-500"
        >
          Teachers Training
        </Link>
      </div>
      {/* Navigation Links Small Screen */}
      <div
        className={`${
          isMenuOpen ? 'block rounded-b-2xl bg-white pt-2 md:hidden' : 'hidden'
        } absolute left-0 top-11 flex w-full flex-col shadow-md md:static md:w-auto md:flex-row md:space-x-6 md:bg-transparent md:shadow-none`}
      >
        <Link
          href="/"
          className="m-2 w-full p-2 hover:text-blue-500 md:p-0"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-gray-700 m-2 w-full p-2 hover:text-blue-500 md:p-0"
          onClick={toggleMenu}
        >
          About Us
        </Link>
      </div>
      {/* CTA Button */}
      <div className="hidden md:block">
        <Button variant="primary" href="/contact" label="Contact Us" />
      </div>
    </nav>
  );
}
