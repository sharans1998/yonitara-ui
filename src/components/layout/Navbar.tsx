// components/Navbar.js

import Link from 'next/link';
import Image from 'next/image';
import Button from '../common/Button';

export default function Navbar() {
  return (
    <nav className="fixed z-50 mt-10 top-0 left-0 right-0 bg-white shadow-md p-4 flex items-center justify-between mx-auto max-w-7xl rounded-full h-16">
      {/* Logo */}
      <div className="w-40 h-12 relative">
        <Image src="/logo.svg" fill alt="Logo" className="object-contain" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-700 hover:text-blue-500">
            About Us
          </Link>
        </li>
      </ul>

      {/* CTA Button */}
      <Button variant="primary" href="/contact" label="Contact Us" />
    </nav>
  );
}
