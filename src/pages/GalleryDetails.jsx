

import { useParams } from 'react-router-dom';
import { dataGallery } from '../data/dataGallery.js';

export default function GalleryDetails() {
  const { slug } = useParams();
  const images = dataGallery[slug] || [];

  if (!images.length) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">Gallery Details for "{slug}"</h1>
        <p className="mt-4 text-gray-600">No images found for this gallery.</p>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Gallery Details for "{slug.replace('-', ' ')}"</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`${slug} image ${index + 1}`}
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
        ))}
      </div>
    </section>
  );
}
