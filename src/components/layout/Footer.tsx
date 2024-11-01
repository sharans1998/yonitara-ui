import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 h-60 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="w-40 h-12 relative">
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
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center border-t border-gray-700 pt-4 text-base">
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
