import main from '../assets/main.jpg';

export default function Home() {
  return (
    <section
      className="relative h-screen bg-cover bg-center glow-in"
      style={{ backgroundImage: `url(${main})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white space-y-6">
        <h1 className="font-poppins text-2xl md:text-4xl max-w-3xl">
          "Capturing Moments, Crafting Stories — Your Vision Through Our Lens."
        </h1>
        <p className="text-base md:text-lg max-w-xl">
          Showcase. Share. Shine. The Ultimate Platform for Photographers Who Mean Business.
        </p>
      </div>
    </section>
  );
}
