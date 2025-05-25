import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="headerBody">
        <div className="flex justify-between items-center p-5">
            <h3><Link to="/home" className="inline-block text-black hover:scale-110 transition duration-200 no-underline font-bold">Derek Song</Link></h3>

            <nav className="flex space-x-6 text-sm text-gray-600">
                <h3><Link to="/about" className="inline-block text-gray-600 hover:text-black hover:scale-110 transition duration-200 no-underline hover:font-bold">Derek Song</Link></h3>
                <h3><Link to="/about" className="inline-block text-gray-600 hover:text-black hover:scale-110 transition duration-200 no-underline hover:font-bold">Derek Song</Link></h3>
            </nav>
      </div>
    </header>
  );
}

export default Header;