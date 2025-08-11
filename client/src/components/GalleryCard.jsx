import React from 'react'

const GalleryCard = ({ image, title, description }) => {
  return (
    <div className="bg-purple-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg shadow-purple-500 transition duration-300 w-full h-80 sm:w-80">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default GalleryCard;