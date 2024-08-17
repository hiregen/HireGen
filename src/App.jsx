import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col-reverse md:flex-row">  {/* Responsive layout */}
        <MainContent />  {/* Main content first on mobile */}
        <Sidebar />  {/* Sidebar on the right on desktop, below on mobile */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
