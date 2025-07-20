import GalleryCard from '../component/GalleryCard.jsx';
import nara from '../assets/nara.jpg';
import loyd from '../assets/loyd.JPG';
import ron from '../assets/ron.JPG';
import genaro from '../assets/genaro.JPG';
import road from '../assets/road.jpg';
import condat from '../assets/condat.JPG';
import josh from '../assets/josh.JPG';
import dream from '../assets/dream.JPG';
import { useState, useEffect } from 'react';

const galleryItems = [
  {
    image: nara,
    title: 'Nara-Kyoto Japan',
    slug: 'Nara-Japan',
  },
  {
    image: loyd,
    title: 'Street Snapshots',
    slug: 'Street-Snapshots',
  },
  {
    image: ron,
    title: 'Pre-Birthday Photoshoot',
    slug: 'Ron Pre-Birthday PhotoShoot',
  },
  {
    image: genaro,
    title: 'Autumn Through My Lens',
    slug: 'Autumn Through My Lens',
  },
  {
    image: road,
    title: 'Quiet Corners of Japan',
    slug: 'Quiet Corners of Japan',
  },
  {
    image: condat,
    title: 'Layers & Laughter',
    slug: 'Layers & Laughter',
  },
  {
    image: josh,
    title: 'A Walk To Remember',
    slug: 'A Walk To Remember',
  },
  {
    image: dream,
    title: 'Shot by me. Felt by you',
    slug: 'Shot by me. Felt by you',
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
