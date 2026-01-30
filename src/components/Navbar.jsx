import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="font-bold text-lg">
          राजेश्वरी सातव
        </h1>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/academics">Academic</Link></li>
          <li><Link to="/records">Portfolio</Link></li>
          <li><Link to="/contact">Profile</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 bg-blue-800 p-4 rounded">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>About Me</Link>
          </li>
          <li>
            <Link to="/academics" onClick={() => setIsOpen(false)}>Academic</Link>
          </li>
          <li>
            <Link to="/records" onClick={() => setIsOpen(false)}>Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Profile</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
