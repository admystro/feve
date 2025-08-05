import React, { useState, useEffect, useCallback } from 'react';

const HeroSlider = ({ slides, autoplayInterval = 5000, randomOrder = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [displayImages, setDisplayImages] = useState([]);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  // Выбор правильной версии изображения
  const getResponsiveImage = useCallback((slide) => {
    if (typeof window === 'undefined' || typeof slide !== 'object') return slide;

    const width = window.innerWidth;
    if (width <= 768 && slide.mobile) return slide.mobile;
    if (width <= 1024 && slide.tablet) return slide.tablet;
    return slide.desktop;
  }, []);

  // Перемешивание изображений
  const shuffleArray = useCallback((arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  // Подготовка слайдов при монтировании
  useEffect(() => {
    if (!slides || slides.length === 0) return;

    const responsiveImages = slides.map(slide => {
      if (typeof slide === 'string') return slide;
      return getResponsiveImage(slide);
    });

    const finalImages = randomOrder ? shuffleArray(responsiveImages) : responsiveImages;
    setDisplayImages(finalImages);
    setCurrentSlide(0);
  }, [slides, randomOrder, getResponsiveImage, shuffleArray]);

  // Автопереход
  useEffect(() => {
    if (!displayImages || displayImages.length <= 1 || isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % displayImages.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [displayImages, autoplayInterval, isPaused]);

  // Touch swipe
  const onTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setCurrentSlide((prev) => (prev + 1) % displayImages.length);
    } else if (distance < -minSwipeDistance) {
      setCurrentSlide((prev) => (prev - 1 + displayImages.length) % displayImages.length);
    }
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  if (!displayImages || displayImages.length === 0) {
    return <div className="w-full h-full bg-gray-200" />;
  }

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {displayImages.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-102'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full select-none transition-all duration-[2500ms] ease-in-out ${
              index === currentSlide ? 'scale-100' : 'scale-105'
            }`}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            draggable={false}
          />

          <div
            className={`absolute inset-0 bg-black transition-opacity duration-[2000ms] ease-in-out ${
              index === currentSlide ? 'opacity-0' : 'opacity-10'
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
