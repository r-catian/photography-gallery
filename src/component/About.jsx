import useScrollFadeIn from '../hooks/useScrollFadeIn.js';  // adjust path if needed
import { useState, useEffect } from 'react';
import main2 from '../assets/main-2.jpg'; // replace with your image
import { Link } from 'react-router-dom';

export default function About() {
   const [ref, isVisible] = useScrollFadeIn();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false); // Reset animation state on mount
    const timer = setTimeout(() => setAnimate(true), 100); // Start animation after a short delay
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className={`
        max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center
        transition-opacity duration-2000 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      <div className={`order-0 md:order-2 ${isVisible && animate ? 'slide-in-right' : ''}`}>
        <img
          src={main2}
          alt="About our photography"
          className="rounded-lg shadow-lg object-cover w-full h-96"
        />
      </div>

     <div className={`order-1 md:order-1 ${isVisible && animate ? 'slide-in-left' : ''}`}>
        <h2 className="text-5xl font-elegant mb-6 text-gray-900">
          About Us
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          At <span className="font-semibold text-indigo-600">RA Photography</span>, we believe every photo captures a unique story — a moment frozen in time, full of emotion and beauty.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Whether you are a professional photographer or someone wanting to showcase memories beautifully, we empower you with tools and designs to create stunning, seamless galleries that shine on any device.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-md shadow-md transition">
         <a href="#contact">Contact Us</a>
        </button>
      </div>

      {/* Image */}
      
    </section>
  );
}
