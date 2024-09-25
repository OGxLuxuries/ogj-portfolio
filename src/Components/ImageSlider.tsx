import '../CSS/Imageslider.css'
import React, { useEffect, useState } from 'react';

interface ImageSliderProps {
  images: string[]; // Array of image URLs
  interval?: number; // Optional interval in milliseconds
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    // Function to load images and get the maximum height
    const loadImages = async () => {
      const heights: number[] = await Promise.all(
        images.map((src) => {
          return new Promise<number>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img.height);
          });
        })
      );
      setContainerHeight(Math.max(...heights));
    };

    loadImages();
  }, [images]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    // Clear the interval on component unmount
    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  // Render nothing if there are no images
  if (images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="slider-container" style={{ height: containerHeight }}>
      <div className="slider">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slide-image"
        />
      </div>
      <div className="indicator">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
