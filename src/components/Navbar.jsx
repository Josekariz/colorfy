import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar glass bg-white bg-opacity-90 border-b border-gray-300 shadow-md mb-4 py-3 px-6 flex items-center justify-between">
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300">
          Colorfy
        </Link>
      </div>
      <div className="flex gap-6">
        <Link href="/docs" className="text-lg text-gray-800 hover:text-gray-600 transition-colors duration-300">
          Docs
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
