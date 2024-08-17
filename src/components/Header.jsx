import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">HireGen Academy</h1>
        {/* Navigation items can be added here */}
      </div>
    </header>
  );
}

export default Header;
