import { useParams } from 'react-router-dom';
import { dataGallery } from '../data/dataGallery.js';
import { useState } from 'react'; // <-- Add this!

export default function GalleryDetails() {



  const { slug } = useParams();
  const images = dataGallery[slug] || [];
  const [selectedImg, setSelectedImg] = useState(null); // <-- For zoom modal

  if (!images.length) {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">{slug}</h1>
        <p className="mt-4 text-gray-600">No images found for this gallery.</p>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{slug.replace(/-/g, ' ')}</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`${slug.replace(/-/g, ' ')} image ${index + 1}`}
            className="w-full h-full object-cover object-center sm:h-64 md:h-72 rounded cursor-zoom-in hover:scale-105 transition"
            onClick={() => setSelectedImg(imgSrc)}
          />
        ))}
      </div>

      {/* Zoom Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Zoomed"
            className="max-w-[80vw] max-h-[80vh] object-contain rounded shadow-xl"
            style={{ aspectRatio: '1/1'}}
          />
        </div>
      )}
    </section>
  );
}
