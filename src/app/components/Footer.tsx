import React from 'react';

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear()
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="w-11/12 mx-auto text-center">
        <p>&copy; {year} RainPred All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;