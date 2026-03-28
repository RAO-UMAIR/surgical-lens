import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [isReviewTransitioning, setIsReviewTransitioning] = useState(true);
  const [isMobileReviews, setIsMobileReviews] = useState(window.innerWidth < 768);

  const images = [
    "/images/home-carousel-images/image-five.png",
    "/images/home-carousel-images/image-two.png",
    "/images/home-carousel-images/image-three.png",
    "/images/home-carousel-images/image-one.png",
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
    }, 1800); // Change slide every 1.8 seconds

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

  const products = [
    {
      id: 1,
      name: "Aqualens",
      image: "/images/homepage-images/aqualens-cover-pg.jpg",
      details: "Premium aqueous lens designed for precise eye correction and patient comfort. Engineered with advanced optical technology for superior vision clarity.",
      features: ["Premium Quality", "Optical Clarity", "Long-lasting", "Biocompatible"],
      position: "left"
    },
    {
      id: 2,
      name: "Cristalens",
      image: "./images/cristalens/artis-plm_NEW.jpg",
      details: "BIFOCAL HYDROPHOBIC LENS Preloaded",
      features: ["Advanced Design", "Clinical Excellence", "Surgical Precision", "Patient Comfort"],
      position: "right"
    },
    
  ];

  const reviews = [
    {
      name: "Dr Safdar Hashmi",
      degree: "Consultant Ophthalmologist / Eye Surgeon",
      hospital: "Laser Eye Center, Multan",
      image: "/images/doctors/dr-four.png",
      text: "Being Pakistan’s first pre-loaded toric lens, it sets a new standard in ophthalmic surgery. The implantation is very easy and controlled, which enhances surgical performance. Along with that, its excellent range and reliable results make it a highly recommended choice."
    },
    {
      name: "Dr Rana Fahad",
      degree: "FCPS Vitreo Retina",
      hospital: "Rana Eye Care, Multan",
      image: "/images/doctors/dr-one.png",

      text: "I’ve been using these lenses for a while now, and I must say the delivery system is extremely smooth and user-friendly. The implantation process is quick and precise, and the post-surgery clarity for patients is excellent."
    },
    {
      name: "Dr Rana Sarfarz",
      degree: "MBBS, FCPS Ophthalmology",
      hospital: "Sarfraz Eye & Maternity Home, Multan",
      image: "/images/doctors/dr-two.png",
      text: "The quality of the lens material is impressive. It ensures long-term stability and does not degrade over time. My patients have experienced outstanding visual outcomes after surgery."
    },
    {
      name: "Dr Arsalan Saleem",
      degree: "Consultant Ophthalmologist / Eye Surgeon, MBBS, FCPS (Ophthalmology)",
      hospital: "",
      image: "/images/doctors/dr-three.png",
      text: "The advanced material used in these lenses makes a noticeable difference. It is durable, safe, and ensures that the eye remains unaffected in the long run."
    },

    {
      name: "Dr Umar Farooq",
      degree: "MBBS, FCPS",
      hospital: "Farooq eye & Surgical Clinic, Dunyapur",
      image: "/images/doctors/dr-five.png",
      text: "These lenses deliver reliable and consistent results. The clarity achieved after surgery is remarkable, and patients report high satisfaction levels."
    },

  ];

  // Keep review layout synced with viewport changes.
  useEffect(() => {
    const handleResize = () => setIsMobileReviews(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const reviewGroups = isMobileReviews
    ? reviews.map((review) => [review])
    : Array.from({ length: Math.ceil(reviews.length / 2) }, (_, i) =>
      reviews.slice(i * 2, i * 2 + 2)
    );

  const extendedReviewGroups = [
    reviewGroups[reviewGroups.length - 1],
    ...reviewGroups,
    reviewGroups[0],
  ];
  const reviewDisplayIndex = reviewIndex + 1;

  useEffect(() => {
    setReviewIndex(0);
    setIsReviewTransitioning(false);
    const t = setTimeout(() => setIsReviewTransitioning(true), 50);
    return () => clearTimeout(t);
  }, [isMobileReviews]);

  const nextReviewSlide = () => {
    setReviewIndex((prev) => {
      const next = prev + 1;
      if (next >= reviewGroups.length) {
        setTimeout(() => {
          setReviewIndex(0);
          setIsReviewTransitioning(false);
          setTimeout(() => setIsReviewTransitioning(true), 50);
        }, 500);
        return reviewGroups.length; // show clone at end
      }
      return next;
    });
  };

  const prevReviewSlide = () => {
    setReviewIndex((prev) => {
      if (prev === 0) {
        setReviewIndex(reviewGroups.length - 1);
        setIsReviewTransitioning(false);
        setTimeout(() => setIsReviewTransitioning(true), 50);
        return -1; // show clone at start
      }
      return prev - 1;
    });
  };

  // Auto-play reviews carousel
  useEffect(() => {
    const reviewsInterval = setInterval(() => {
      nextReviewSlide();
    }, 4000);

    return () => clearInterval(reviewsInterval);
  }, [reviewGroups.length]);

  return (
    <div className="relative w-full">
      {/* <h1 className="text-center mb-3 sm:mb-5 text-lg sm:text-xl md:text-2xl">Home</h1> */}

      {/* Slider Container */}
      <div className="relative cursor-pointer w-full h-[400px] sm:h-[500px] md:h-[60vh] lg:h-[80vh]  overflow-hidden">
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
              className="h-full w-full object-center flex-shrink-0"
              style={{ width: `${100 / extendedImages.length}%` }}
            />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 cursor-pointer z-10 text-gray-400 hover:scale-125 transition-all duration-300 drop-shadow-lg"
        >
          <span className="text-6xl sm:text-6xl md:text-7xl font-light" style={{ fontFamily: 'Arial, sans-serif' }}>‹</span>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2  cursor-pointer z-10 text-gray-400 hover:scale-125 transition-all duration-300 drop-shadow-lg"
        >
          <span className="text-6xl sm:text-6xl md:text-7xl font-light" style={{ fontFamily: 'Arial, sans-serif' }}>›</span>
        </button>

        {/* Dots Indicator */}
        {/* <div className="absolute bottom-2 sm:bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 md:gap-2.5 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${(currentSlide % images.length) === index
                  ? 'bg-white'
                  : 'bg-white bg-opacity-50'
                }`}
            />
          ))}
        </div> */}
      </div>

      <section className="mt-10 mb-14 w-full px-5 sm:px-8 md:px-12 lg:px-16 text-center">
        <p className="text-[11px] sm:text-xs md:text-sm tracking-[0.32em] text-[#b8681a] font-semibold">OUR COMPANY</p>
        <h2 className="sight-gradient-title mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.06]">
          Surgical Sight Solution
        </h2>

        <div className="sight-animated-line mt-5 mb-6" aria-hidden="true"></div>

        <p className="text-lg sm:text-xl md:text-2xl text-[#5b3a1a] leading-relaxed max-w-4xl mx-auto">
          Provide medical devices with confidence and precision.
        </p>

        <p className="mt-3 text-sm sm:text-base md:text-lg text-[#7a4a1f] leading-relaxed max-w-5xl mx-auto">
          We help eye patients to live a better life and provide medical devices for them all over Pakistan.
          <br />
          Surgical Sight Solution is committed to quality care and trusted support.
        </p>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#fff9f3] to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c1810] mb-4">
            Our Products
          </h2>
          <div className="text-center mb-12 md:mb-20">
            <p className="text-base sm:text-lg text-[#6b4423] max-w-2xl mx-auto">
              Precision medical devices crafted for excellence and patient care
            </p>
          </div>

          {/* Products Grid */}
          <div className="space-y-16 md:space-y-24">
            {products.map((product, idx) => (
              <div
                key={product.id}
                className={`flex flex-col ${product.position === "left"
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                  } items-center gap-8 md:gap-12 lg:gap-16`}
              >
                {/* Product Image */}
                <div className={`w-full md:w-1/2 flex justify-center animate-slide-in-${product.position}`}>
                  <div className="relative h-64 w-full sm:h-72 md:h-80 lg:h-96 overflow-hidden flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain product-image-live"
                    />
                  </div>
                </div>

                {/* Product Details */}
                <div className={`w-full md:w-1/2 animate-slide-in-${product.position === "left" ? "right" : "left"}`}>
                  <div className="space-y-4">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f28a1d]">
                      {product.name}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#f6ad44] to-[#d46a0a] rounded-full"></div>
                    <p className="text-base sm:text-lg md:text-lg text-[#5b3a1a] leading-relaxed">
                      {product.details}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-[#eceff3] text-[#4b5563] border border-[#d8dee6] text-xs sm:text-sm font-medium rounded-full shadow-sm hover:bg-[#e3e8ee] transition-colors duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Reviews Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-[#fff8f0]">
        <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14">
          <p className="text-center text-[11px] sm:text-xs tracking-[0.32em] text-[#b8681a] font-semibold">TRUSTED BY PROFESSIONALS</p>
          <h2 className="text-center mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c1810] mb-4">
            What Doctors Say
          </h2>
          <div className="text-center mb-10 md:mb-14">
            <p className="text-base sm:text-lg text-[#6b4423] max-w-xl mx-auto">
              Hear from the medical professionals who trust our products every day
            </p>
          </div>

          {/* Reviews Slider */}
          <div className="relative">
            {/* Viewport */}
            <div className="overflow-hidden">
              <div
                className={`flex ${isReviewTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                style={{
                  width: `${extendedReviewGroups.length * 100}%`,
                  transform: `translateX(-${reviewDisplayIndex * (100 / extendedReviewGroups.length)}%)`,
                }}
              >
                {extendedReviewGroups.map((group, groupIdx) => (
                  <div
                    key={`review-group-${groupIdx}`}
                    className={`w-full flex-shrink-0 ${isMobileReviews ? 'flex justify-center' : 'flex gap-8 px-4 justify-center'}`}
                    style={{ width: `${100 / extendedReviewGroups.length}%` }}
                  >
                    {group.map((review, idx) => (
                      <div
                        key={`${review.name}-${idx}`}
                        className={`${isMobileReviews ? 'w-full max-w-sm min-h-[230px]' : 'basis-1/2 min-h-[360px]'} flex overflow-hidden`}
                      >
                        <div className={`${isMobileReviews ? 'w-[50%] rounded-xl overflow-hidden' : 'w-[60%] lg:w-[58%]'} flex-shrink-0 flex items-center justify-center`}>
                          <img src={review.image} alt={review.name} className={`w-full h-full max-h-[240px] md:max-h-[340px] lg:max-h-[380px] object-contain ${isMobileReviews ? 'rounded-xl' : ''}`} />
                        </div>
                        <div className={`${isMobileReviews ? 'w-[50%] pl-3' : 'w-[40%] lg:w-[42%]'} flex flex-col justify-center text-left`}>
                          <p className={`${isMobileReviews ? 'text-[10px] leading-[1.28]' : 'text-base leading-relaxed'} text-[#5b3a1a] font-semibold italic`}>
                            &ldquo;{review.text}&rdquo;
                          </p>
                          <div className={`w-10 h-0.5 bg-gradient-to-r from-[#f6ad44] to-[#d46a0a] rounded-full ${isMobileReviews ? 'my-2' : 'my-3'}`}></div>
                          <p className={`${isMobileReviews ? 'text-xs leading-tight' : 'text-lg'} text-[#cc6f12] font-bold`}>{review.name}</p>
                          <p className={`${isMobileReviews ? 'text-[9px] leading-tight' : 'text-xs'} text-[#8a5a2a] font-medium mt-1`}>{review.degree}</p>
                          {review.hospital && (
                            <p className={`${isMobileReviews ? 'text-[9px] leading-tight' : 'text-xs'} text-[#9c7b56] mt-0.5`}>{review.hospital}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevReviewSlide}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white border border-[#f0d5b0] shadow-md flex items-center justify-center text-[#cc6f12] hover:bg-[#f7eee3] transition-all duration-300"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-light" style={{ fontFamily: 'Arial, sans-serif' }}>‹</span>
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextReviewSlide}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white border border-[#f0d5b0] shadow-md flex items-center justify-center text-[#cc6f12] hover:bg-[#f7eee3] transition-all duration-300"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-light" style={{ fontFamily: 'Arial, sans-serif' }}>›</span>
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: reviewGroups.length }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setReviewIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${reviewIndex === i ? 'bg-[#f28a1d] scale-110' : 'bg-[#e0c8aa]'
                    }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
} 