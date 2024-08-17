import React from 'react';
import VideoCarousel from './VideoCarousel';

function MainContent() {
  return (
    <main className="flex-grow mb-8">
      <VideoCarousel />
      <div className="bg-gray-800 rounded-lg p-4 mt-8">
        <h2 className="text-xl font-bold mb-4">How we work?</h2>
        <p>At HireGen Academy, we're on a mission to transform the tech career journeys of international students and graduates.<br/> Our innovative approach combines education, mentorship, and industry connections to 10x your <br/>chances of landing your dream tech job or internship.</p><br/>
        <ul className="list-disc list-inside">
          <li>We offer tailored programs to boost your technical and soft skills, aligning them with industry demands.
          </li>
          <li>Our expert mentors provide personalized advice to navigate the complex tech job market.</li>
          <li>We connect you with industry professionals and fellow tech enthusiasts through events and our vibrant community.</li>
          <li>From resume crafting to interview prep, we guide you through every step of the job search process.
          </li>
          <li>Visa and Sponsorship Assistance: We provide guidance on navigating visa requirements and finding sponsorship opportunities.
          </li>
          <li>Our platform offers ongoing access to cutting-edge resources, keeping you updated with the latest in tech.
          </li>
          <li>We have a supportive environment where members learn from and inspire each other.
          </li>
        </ul>
      </div>
    </main>
  );
}

export default MainContent;
