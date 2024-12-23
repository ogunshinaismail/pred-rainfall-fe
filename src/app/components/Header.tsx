import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">RainPred</h1>
        <nav>
          {/* <ul className="flex space-x-6">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#form" className="hover:underline">Predict</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
          </ul> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
