import React from 'react';
import GalleryCard from '../components/GalleryCard';
import donation1 from '../assets/donation1.jpg';
import donation2 from '../assets/donation2.jpg';
import donation3 from '../assets/donation3.jpg';
import donation4 from '../assets/donation4.jpg';

const Gallery = () => {
  const galleryImages = [
    {
      image: donation1,
      title: 'Blood Drive 2022',
      description: 'Organized in partnership with Red Cross.',
    },
    {
      image: donation2,
      title: 'Awareness Event',
      description: 'Educating people on the importance of blood donation.',
    },
    {
      image: donation3,
      title: 'Camp at City Hospital',
      description: 'Collected 120+ units of blood.',
    },
    {
      image: donation4,
      title: 'Volunteer Group',
      description: 'Our amazing volunteer team at work.',
    }
  ];

  return (
    <div id='gallery' className="px-10 py-48 bg-gradient-to-b from-black via-violet-900 to-black h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {galleryImages.map((item, index) => (
        <GalleryCard 
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Gallery;
