import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-blue-600 px-10 py-5">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-4xl font-bold text-white">
          CodingLab
        </h1>


        {/* Menu */}
        <div className="flex items-center gap-10 text-white text-lg font-medium">

          <Link
            to="/"
            className="hover:border-b-2 hover:border-white pb-1 transition"
          >
            Home
          </Link>


          <Link
            to="/about"
            className="hover:border-b-2 hover:border-white pb-1 transition"
          >
            About
          </Link>


          <Link
            to="/contact"
            className="hover:border-b-2 hover:border-white pb-1 transition"
          >
            Contact Us
          </Link>


          <Link
            to="/login"
            className="hover:border-b-2 hover:border-white pb-1 transition"
          >
            Login
          </Link>


          <Link
            to="/signup"
            className="hover:border-b-2 hover:border-white pb-1 transition"
          >
            Signup
          </Link>

        </div>


        {/* Search Icon */}
        <button className="text-white text-2xl hover:scale-110 transition">
          <FaSearch />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;