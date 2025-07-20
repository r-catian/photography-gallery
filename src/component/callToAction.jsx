import { useState, useEffect } from 'react';
import useFadeInUp from '../hooks/fadeInUp.js';

export default function CallToAction() {

    const [animate, setAnimate] = useState(false);
        const [ref, isVisible] = useFadeInUp();
    
      useEffect(() => {
        setAnimate(false); // Reset animation state on mount
        const timer = setTimeout(() => setAnimate(true), 500); // Start animation after a short delay
        return () => clearTimeout(timer); // Cleanup on unmount
      }, []);

  return (
    <section ref={ref} className={` py-16 px-6 text-center rounded-lg max-w-xl mx-auto font-elegant ${isVisible && animate ? 'fade-in-up' : ''}`}>
      <h2 className="text-teal-700 text-4xl font-bold mb-4">Visual Stories Worth Keeping</h2>
      <p className="text-m mb-8 text-black-600">Creative photography that connects and captivates.</p>
    </section>
  );
}
