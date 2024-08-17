import React from 'react';

function Sidebar() {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 md:ml-8 mb-8">
      <div className="bg-gray-800 rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">HireGen Academy</h2>
        
        <p className="mb-4">We use Ai-Driven Tools to help and teach you to a land job.</p>
        <div className="flex justify-between mb-4">
          <div>
            <p className="font-bold">100+</p>
            <p className="text-sm">Members</p>
          </div>
          <div>
            <p className="font-bold">20+</p>
            <p className="text-sm">Online</p>
          </div>
          <div>
            <p className="font-bold">2</p>
            <p className="text-sm">Admins</p>
          </div>
        </div>
        <button className="w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded">
          <a href="https://discord.gg/PuUDCkaURa" target="_blank">Join FREE Discord</a>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
