import sneaker from "../assets/heroic.avif";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between bg-[#f4f4f6] h-screen overflow-hidden">
      {/* Background Gradient */}
      <div /*className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"*/
      ></div>

      {/* Left Content */}
      <div className="relative z-10 md:w-1/2 px-8 md:px-16 lg:px-24 flex flex-col justify-center space-y-6 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-grey-900">
          Step Up <span className="text-indigo-600">Your Style</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-md mx-auto md:mx-0">
          The ultimate sneaker engineered for{" "}
          <span className="font-semibold text-[#ff515b]">comfort</span>,
          <span className="font-semibold text-[#ff515b]"> speed</span>, and{" "}
          <span className="font-semibold text-[#ff515b]">timeless style</span>.
          Designed for dreamers, made for doers.
        </p>

        <div className="flex justify-center md:justify-start">
          <button className="group flex items-center gap-3 bg-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-700 hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            Grab Yours Now
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Sneaker Image */}
      <div className="relative md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <img
          src={sneaker}
          alt="Sneaker"
          className="w-full object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
