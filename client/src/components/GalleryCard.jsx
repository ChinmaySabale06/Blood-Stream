import React from 'react'

const GalleryCard = ({ image, title, description }) => {
  return (
    <div className="health-card h-80 w-full overflow-hidden sm:w-80">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-slate-100">{title}</h2>
        <p className="mt-2 text-sm text-slate-300">{description}</p>
      </div>
    </div>
  );
};

export default GalleryCard;