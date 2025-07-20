import GalleryCard from '../component/GalleryCard.jsx';
import main2 from '../assets/main-2.jpg';
import main3 from '../assets/main-3.jpg';
import { useState, useEffect } from 'react';

const galleryItems = [
  {
    image: main2,
    title: 'Dani & Ryan Wedding',
    slug: 'dani-ryan',
  },
  {
    image: main3,
    title: 'Urban Streets',
    slug: 'urban-streets',
  },
];

export default function Gallery() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Show a loading spinner or message while loading
  if (loading) {
    return (
      <section className="max-w-6xl mx-auto p-6 flex justify-center items-center h-64">
        <div className="loader border-4 border-indigo-600 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Client Galleries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <GalleryCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
