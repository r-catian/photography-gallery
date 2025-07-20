import { useEffect, useState } from 'react';
import useFadeInUp from '../hooks/fadeInUp.js'; 
import wedding from '../assets/wedding.jpg'; 
import event from '../assets/event.jpg';
import portrait from '../assets/portrait.jpg';

export default function Services() {

    const [animate, setAnimate] = useState(false);
    const [ref, isVisible] = useFadeInUp();

  useEffect(() => {
    setAnimate(false); // Reset animation state on mount
    const timer = setTimeout(() => setAnimate(true), 100); // Start animation after a short delay
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <section id="services" ref={ref} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
      <p className="text-lg text-center mb-12">Photography sessions, photo editing, event coverage, and more.</p>

      

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className={`p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-xl transition ${isVisible && animate ? 'fade-in-up' : ''}`}>
          <div className="overflow-hidden rounded-md">
            <img src={wedding} className="w-full h-48 object-cover rounded-md transform hover:scale-110 transition duration-300 ease-in-out"
            alt="Wedding Photography" />
          </div>
          <h3 className="font-semibold text-xl mb-2">Wedding Photography</h3>
          <p className="text-sm">Timeless photos for your special day.</p>
        </div>
        
        <div className={`p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-xl transition ${isVisible && animate ? 'fade-in-up' : ''}`}>
          <div className="overflow-hidden rounded-md">
            <img src={event} className="w-full h-48 object-cover rounded-md transform hover:scale-110 transition duration-300 ease-in-out"
            alt="Wedding Photography" />
          </div>
          
          <h3 className="font-semibold text-xl mb-2">Event Coverage</h3>
          <p className="text-sm">Capture every moment of your events.</p>
        </div>

        <div className={`p-6 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-xl transition ${isVisible && animate ? 'fade-in-up' : ''}`}>
          <div className="overflow-hidden rounded-md">
            <img src={portrait} className="w-full h-48 object-cover rounded-md transform hover:scale-110 transition duration-300 ease-in-out"
            alt="Wedding Photography" />
          </div>
          <h3 className="font-semibold text-xl mb-2">Portrait Sessions</h3>
          <p className="text-sm">Modern and creative personal portraits.</p>
        </div>
      </div>
    </section>
  );
}
