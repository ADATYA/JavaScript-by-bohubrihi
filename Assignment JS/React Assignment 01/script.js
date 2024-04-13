import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/photos');
      setPhotos(response.data);
    };

    fetchData();
  }, []);

  const filterPhotos = (category) => {
    setSelectedCategory(category);
  };

  const displayedPhotos = photos.filter((photo) => {
    return category === 'All' || photo.category === category;
  });

  return (
    <div>
      <div>
        <button onClick={() => filterPhotos('All')}>All</button>
        <button onClick={() => filterPhotos('Nature')}>Nature</button>
        <button onClick={() => filterPhotos('Portrait')}>Portrait</button>
        {/* Add more category buttons */}
      </div>
      <div className="photo-grid">
        {displayedPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
