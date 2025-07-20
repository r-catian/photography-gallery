import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function GalleryCard({ image, title, slug }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      navigate(`/gallery/${slug}`);
    }, 300); // 1.5 seconds delay
  };

  // Show a loading spinner or message while loading
  if (loading) {
    return (
      <section className="max-w-6xl mx-auto p-6 flex justify-center items-center h-64">
        <div className="loader border-4 border-indigo-600 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
      </section>
    );
  }

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <button
             className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
            onClick={handleClick}
          >
          View Gallery
        </button>
      </div>
    </div>
  );
}
