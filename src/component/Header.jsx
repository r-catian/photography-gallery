
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // <-- Ito ang idagdag

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isGallery = location.pathname === '/gallery'; // check kung nasa gallery ka


  return (
         <header className="sticky top-0 z-50 bg-white shadow-md flex items-center justify-between px-6 md:px-20 py-4 md:py-5">
      {/* Logo sa kaliwa */}
        <div className="font-elegant text-black text-2xl select-none tracking-wide uppercase ">
          <Link to="/">RA Photography</Link>
        </div>

        {/* Hamburger menu button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            ☰
        </button>

      {/* Navigation sa kanan */}
    {/* ito ay ginawa ko kapag nasa page ng gallery lalabas yun back to homepage sa header. */}
      {!isGallery && (
  <nav className="hidden md:flex space-x-8 font-poppins uppercase text-sm text-black">
    <ul className="flex space-x-6">
      <li><Link to="/" className="hover:underline">Home</Link></li>
      <li><a href="/about" className="hover:underline">About</a></li>
      <li><a href="/gallery" className="hover:underline">Gallery</a></li>
      <li><a href="/contact" className="hover:underline">Contact</a></li>
    </ul>
  </nav>
  )}

        {/* Mobile menu */}

        {isOpen && !isGallery && (
      <nav className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-10">
        <ul className="flex flex-col items-center gap-4 py-4 font-sans-serif uppercase text-black">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="/gallery" onClick={() => setIsOpen(false)}>Gallery</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
  </nav>
)}
    </header>
  );
}
