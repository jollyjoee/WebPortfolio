import { useEffect, useRef, useState } from "react";
import Ucapi from './assets/ucapi.png';
import ColorBends from './ColorBends';

function Card({ className = "", children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        mx-auto flex min-h-80 min-w-64 items-stretch flex-wrap
        bg-neutral-900 rounded-xl
        transition-all duration-700 ease-out
        ${className}
        ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"}
      `}
    >
     <ColorBends
      colors={["#3A29FF", "#FF94B4", "#FF3232"]}
      rotation={10}
      speed={0.5}
      scale={1.6}
      frequency={1.7}
      warpStrength={1.2}
      mouseInfluence={0.5}
      parallax={0.9}
      noise={0.25}
      className='rounded-xl'
     />
      {children}
    </div>
  );
}

export default Card;
