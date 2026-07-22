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
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white pb-1"
                : "hover:text-gray-200 transition"
            }
          >
            Home
          </Link>

          <Link
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white pb-1"
                : "hover:text-gray-200 transition"
            }
          >
            Services
          </Link>

          <Link
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white pb-1"
                : "hover:text-gray-200 transition"
            }
          >
            Products
          </Link>

          <Link
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white pb-1"
                : "hover:text-gray-200 transition"
            }
          >
            Contact Us
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