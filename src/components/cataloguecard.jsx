import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CatalogueCard({ sneaker }) {
  const [flipped, setFlipped] = useState(false);
  const [featureIndex, setFeatureIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Go to next feature on the back side
  const handleNextFeature = () => {
    setFeatureIndex((prev) => (prev + 1) % sneaker.features.length);
  };

  // Go to previous feature on the back side
  const handlePrevFeature = () => {
    setFeatureIndex(
      (prev) => (prev - 1 + sneaker.features.length) % sneaker.features.length
    );
  };

  // Go to previous image on the front side
  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? sneaker.images.length - 1 : prev - 1
    );
  };

  // Go to next image on the front side
  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === sneaker.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="relative w-full h-[420px] cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-white flex flex-col pb-8 rounded-xl shadow-lg overflow-hidden backface-hidden">
          {/* Image carousel */}
          <div className="relative h-3/4 w-full">
            <img
              src={sneaker.images[currentImageIndex]}
              alt={sneaker.name}
              className="w-full h-full object-cover"
            />

            {/* Left Arrow */}
            {sneaker.images.length > 1 && (
              <button
                onClick={handlePrevImage}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-gray-800/40 p-2 rounded-full hover:bg-gray-800/60 transition"
              >
                <FaArrowLeft className="text-white" />
              </button>
            )}

            {/* Right Arrow */}
            {sneaker.images.length > 1 && (
              <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gray-800/40 p-2 rounded-full hover:bg-gray-800/60 transition"
              >
                <FaArrowRight className="text-white" />
              </button>
            )}
          </div>

          {/* Sneaker Info */}
          <div className="p-5 space-y-2">
            <h2 className="text-xl font-bold text-gray-800">{sneaker.name}</h2>
            <p className="text-gray-600">{sneaker.category}</p>
            <p className="text-indigo-600 text-lg font-semibold">
              {sneaker.price}
            </p>
            <button
              onClick={(e) => e.stopPropagation()}
              className="mt-3 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-800 transition"
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full rounded-xl shadow-lg overflow-hidden backface-hidden rotate-y-180 p-5 flex flex-col items-center justify-center bg-center bg-cover relative"
          style={{ backgroundImage: `url(${sneaker.images[0]})` }}
        >
          {/* Dark overlay with blur */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

          {/* Back content */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <h2 className="text-2xl font-bold text-white mb-4">
              {sneaker.name}
            </h2>
            <p className="text-white text-sm mb-6 leading-relaxed">
              {sneaker.features[featureIndex]}
            </p>

            {/* Features navigation */}
            <div className="flex items-center gap-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevFeature();
                }}
                className="bg-white/20 hover:bg-white/40 transition text-white p-3 rounded-full shadow-lg"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextFeature();
                }}
                className="bg-white/20 hover:bg-white/40 transition text-white p-3 rounded-full shadow-lg"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
