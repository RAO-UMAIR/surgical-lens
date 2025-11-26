import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const images = [
    "/images/lens-3.jpg",
    "/images/knife.jpg", 
    "/images/injector-2.jpg"
  ];

  // Auto-play functionality - moves forward automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = prev + 1;
        if (nextSlide >= images.length) {
          // When reaching the end, immediately jump to start without transition
          setTimeout(() => {
            setCurrentSlide(0);
            setIsTransitioning(false);
            setTimeout(() => setIsTransitioning(true), 50);
          }, 500);
          return images.length; // Show the "clone" at the end
        }
        return nextSlide;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const nextSlide = prev + 1;
      if (nextSlide >= images.length) {
        // When reaching the end, immediately jump to start without transition
        setTimeout(() => {
          setCurrentSlide(0);
          setIsTransitioning(false);
          setTimeout(() => setIsTransitioning(true), 50);
        }, 500);
        return images.length; // Show the "clone" at the end
      }
      return nextSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        // When at start, jump to end without transition
        setCurrentSlide(images.length - 1);
        setIsTransitioning(false);
        setTimeout(() => setIsTransitioning(true), 50);
        return -1; // Show the "clone" at the beginning
      }
      return prev - 1;
    });
  };

  // Create extended array with clones for seamless loop
  const extendedImages = [images[images.length - 1], ...images, images[0]];
  const displaySlide = currentSlide + 1; // +1 because we added a clone at the beginning

  return (
    <div className="relative w-full">
      {/* <h1 className="text-center mb-3 sm:mb-5 text-lg sm:text-xl md:text-2xl">Home</h1> */}
      
      {/* Slider Container */}
      <div className="relative cursor-pointer w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[750px] overflow-hidden">
        {/* Images Container */}
        <div 
          className={`flex h-full ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{
            width: `${extendedImages.length * 100}%`,
            transform: `translateX(-${displaySlide * (100 / extendedImages.length)}%)`
          }}
        >
          {extendedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover object-center flex-shrink-0"
              style={{ width: `${100 / extendedImages.length}%` }}
            />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 cursor-pointer z-10 text-orange-400 hover:scale-125 transition-all duration-300 drop-shadow-lg"
        >
          <span className="text-5xl sm:text-6xl md:text-7xl font-light" style={{ fontFamily: 'Arial, sans-serif' }}>‹</span>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2  cursor-pointer z-10 text-orange-400 hover:scale-125 transition-all duration-300 drop-shadow-lg"
        >
          <span className="text-5xl sm:text-6xl md:text-7xl font-light" style={{ fontFamily: 'Arial, sans-serif' }}>›</span>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-2 sm:bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 md:gap-2.5 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${
                (currentSlide % images.length) === index 
                  ? 'bg-white' 
                  : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dummy scrollable content */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-12 space-y-10 bg-gray-100 text-gray-800">
        {Array.from({ length: 6 }).map((_, idx) => (
          <article key={idx} className="max-w-4xl space-y-3">
            <h2 className="text-2xl font-semibold text-red-500">
              Sample section {idx + 1}
            </h2>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, libero ac mollis fermentum, urna risus pharetra lacus,
              nec ultrices sem justo at libero. Integer efficitur, leo ac
              volutpat cursus, nunc nisl gravida quam, a consectetur libero est
              vitae est. Aenean id neque ut eros hendrerit porttitor.
            </p>
            <p className="leading-relaxed text-sm sm:text-base text-gray-600">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Duis eleifend aliquam orci, sed
              suscipit enim gravida at. Vivamus pharetra ullamcorper metus, et
              maximus erat placerat ut. Cras gravida diam id elit pharetra
              pretium.
            </p>
          </article>
        ))}
      </section>
    </div>
  );
} 