import React, { useState } from 'react';

const VideoCarousel = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    { id: 1, title: 'UK VISA JOB HUNT', thumbnail:  'https://raw.githubusercontent.com/hiregen/HireGen/main/src/images/thumbnail1.PNG', url: 'https://www.loom.com/embed/14fff96bc523440b833f15411133f087?sid=993618d9-497e-4dc7-86b2-1e2403f47e5a' },
    { id: 2, title: 'Best Student Job Hunt Blueprint - HireGen', thumbnail: 'https://raw.githubusercontent.com/hiregen/HireGen/main/src/images/thumbnail2.PNG', url: 'https://www.loom.com/embed/995d27eddbd143b987d4b0ec2959c857?sid=3dc87e3f-382a-415c-93e5-e0008953129f' },
    { id: 3, title: 'Understanding HireGen Workflow', thumbnail: 'https://raw.githubusercontent.com/hiregen/HireGen/main/src/images/thumbnail3.PNG', url: 'https://www.loom.com/embed/84981f9d59be48c4b8df6dff72ce5a88?sid=2d37eabc-d15b-443b-8fbf-f183a1633514' },
    { id: 4, title: 'Prompt Hack For Students Resume', thumbnail: 'https://raw.githubusercontent.com/hiregen/HireGen/main/src/images/thumbnail4.PNG',url: 'https://www.loom.com/embed/7f017fa2da4a45af90aac005e725e07d?sid=b67d6585-9dda-4f95-a99a-3d75151f8682' },
    { id: 5, title: 'HireGen - on Communication Skill', thumbnail: 'https://raw.githubusercontent.com/hiregen/HireGen/main/src/images/thumbnail5.PNG',url: 'https://www.loom.com/embed/588c277ac1ff445593ac4595eb9751c8?sid=01b32aa8-8d1e-4815-b3b7-82cf5fe5bb09' },
  
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="relative w-full pb-[56.25%] mb-4">
        <iframe
          src={videos[activeVideo].url}
          title={videos[activeVideo].title}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2	p-4 border-2 border-yellow-500 rounded-lg	">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`cursor-pointer ${index === activeVideo ? 'ring-4 ring-yellow-500 rounded' : ''}`}
            onClick={() => setActiveVideo(index)}
            style={{ width: '80px', height: '80px' } }  /* Ensure the container matches the thumbnail size */
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover rounded"  /* Full coverage within the container */
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
