import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="h-60 bg-darkGray px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center justify-between">
          <div className="relative h-12 w-40">
            <Image
              src="https://sharans1998.github.io/yonitara-ui/logo.svg"
              fill
              alt="Logo"
              className="object-contain"
            />
          </div>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="border-gray-700 flex flex-col items-center justify-between gap-4 border-t pt-4 text-base md:flex-row">
          <p>&copy; 2023 Yonitara All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="/privacy-policy" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="hover:text-gray-400">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
