export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white">
      <h1 className="text-2xl font-bold text-gray-800">
        Kick<span className="text-indigo-600">N</span>Shine
      </h1>
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li>
          <a href="#features" className="hover:text-indigo-600">
            Features
          </a>
        </li>
        <li>
          <a href="#reviews" className="hover:text-indigo-600">
            Reviews
          </a>
        </li>
        <li>
          <a href="#pricing" className="hover:text-indigo-600">
            Pricing
          </a>
        </li>
      </ul>
      <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-900 transition">
        Buy Now
      </button>
    </nav>
  );
}
