import { useEffect, useRef, useState } from "react";
import React from '../assets/react.svg';
import Cloudflare from '../assets/cloudflare-icon.svg'
import CSSIcon from '../assets/css-3.svg'

function Hero() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(true);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const icons = [
    'https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/java/java-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    Cloudflare,
    CSSIcon,
    'https://cdn.iconscout.com/icon/free/png-256/free-html-5-icon-svg-download-png-1175208.png',
    'https://www.svgrepo.com/show/303251/mysql-logo.svg',
    'https://www.svgrepo.com/show/452091/python.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/2048px-Lua-Logo.svg.png',
    React,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true); // Slide out to right
      
      setTimeout(() => {
        setCurrentIconIndex((prev) => (prev + 1) % icons.length);
        setIsAnimating(false); // Slide in from left
      }, 500); // Wait for slide-out animation
      
    }, 2000); // Change every 1.5 seconds

    return () => clearInterval(interval);
  }, [icons.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      },
      { threshold: 0.7 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

    return (
        <div ref={ref}>
            <div
            className={`w-full min-h-120 mx-auto flex flex-col mb-10 mt-20 transition-all duration-700 justify-center gap-5
                ${visible ? "opacity-100 scale-100" : "scale-0 opacity-0"}
            `}
            >
                <div className="w-full text-center md:text-5xl text-3xl font2 tracking-wider z-100">Crafting Code</div>
                <img src={icons[currentIconIndex]} className={`w-35 h-35 text-center mx-auto my-5 transition duration-600 ${
                  isAnimating 
                    ? 'opacity-0 rotate-250 scale-0'  
                    : 'opacity-100 scale-100'
                }`}/>
                <div className="w-full text-center md:text-5xl text-3xl font2 tracking-wider">Designing Solutions</div>
            </div>
        </div>
    )
}

export default Hero;
