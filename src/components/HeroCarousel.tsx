"use client"

import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const images = [
  { 
    src: '/hero-image.jpg', 
    header: 'Empower Your Voice, Inform Your Vote', 
    subtext: 'Join us in making informed decisions that shape our future.' 
  },
  { 
    src: '/image1.png', 
    header: 'Engage in Meaningful Discussions', 
    subtext: 'Participate in dialogues that matter and drive change.' 
  },
  { 
    src: '/image2.png', 
    header: 'Stay Informed About Policies', 
    subtext: 'Keep up with the latest policies that affect your community.' 
  },
  { 
    src: '/image3.png', 
    header: 'Make Your Voice Heard', 
    subtext: 'Your opinion matters—let it resonate in the public sphere.' 
  },
  { 
    src: '/image4.png', 
    header: 'Join the Movement for Change', 
    subtext: 'Be part of a collective effort to create a better tomorrow.' 
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative bg-blue-600 h-[70vh]">
      <Image src={images[currentIndex].src} alt="Hero Image" layout="fill" objectFit="cover" className="mix-blend-overlay" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{images[currentIndex].header}</h1>
          <p className="text-lg md:text-xl text-white mb-4">{images[currentIndex].subtext}</p>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 p-2 rounded-full">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 p-2 rounded-full">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}