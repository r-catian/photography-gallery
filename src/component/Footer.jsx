

import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center flex flex-col">
        {/* Logo or Brand */}
        <div className="text-lg font-semibold mb-4 md:mb-0 uppercase">
          © 2025 ra photograhpy
        </div>


        {/* Social Media Icons */}
        <div className="flex gap-6 text-xl justify-center py-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
            className="hover:text-blue-500 transition hover:drop-shadow-[0_0_6px_#3b82f6]">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="hover:text-pink-500 transition hover:drop-shadow-[0_0_6px_#ec4899]">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
            className="hover:text-sky-400 transition hover:drop-shadow-[0_0_6px_#0ea5e9]">
            <FaTwitter />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="hover:text-gray-300 transition hover:drop-shadow-[0_0_6px_#e5e7eb]">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
