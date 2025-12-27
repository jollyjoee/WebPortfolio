import { useEffect, useRef, useState } from "react";
import DotGrid from '../Background/DotGrid.jsx'

function Card({ className = "", children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
        
    const observer = new IntersectionObserver(
      ([entry]) => {
          if (entry.isIntersecting) {
              setVisible(true);
              setHasAnimated(true);
          }
      },
      { threshold: 0.2 }
    );

      if (ref.current) observer.observe(ref.current);

      return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={ref} className={className}>
      <div
        className={`
          z-100
          mx-auto flex min-h-80 h-full min-w-64 items-stretch flex-wrap
          bg-neutral-800/50 rounded-xl
          transition-all duration-700 ease-out
          ${visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"}
        `}
      >
        {children}
      </div>
    </div>
  );
}

export default Card;
