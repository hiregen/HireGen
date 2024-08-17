import React from 'react';

const AuthorSection = () => (
  <div className="text-center">
    <img
      src="https://via.placeholder.com/100"
      alt="Author"
      className="w-24 h-24 rounded-full mx-auto mb-4"
    />
    <h2 className="text-xl font-bold">Sponsored Techies</h2>
    <p className="text-gray-400">We help Techies get 2-3 interviews per week & land jobs abroad.</p>
    <div className="mt-4 flex justify-center items-center space-x-4">
      <div className="text-center">
        <span className="block text-xl font-bold">152</span>
        <span className="block text-sm text-gray-400">Members</span>
      </div>
      <div className="text-center">
        <span className="block text-xl font-bold">1</span>
        <span className="block text-sm text-gray-400">Online</span>
      </div>
      <div className="text-center">
        <span className="block text-xl font-bold">1</span>
        <span className="block text-sm text-gray-400">Admins</span>
      </div>
    </div>
  </div>
);

export default AuthorSection;
