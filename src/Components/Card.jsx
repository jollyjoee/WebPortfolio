import { useEffect, useRef, useState } from "react";
import DotGrid from '../Background/DotGrid.jsx'

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
    <div ref={ref} className={className}>
      <div
        className={`
          z-100
          mx-auto flex min-h-80 h-full min-w-64 items-stretch flex-wrap
          bg-neutral-900 rounded-xl shadow-[inset_0px_0px_77px_21px_#080808]
          transition-all duration-700 ease-out
          ${visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"}
        `}
      >
        <DotGrid
          dotSize={2}
          gap={25}
          baseColor="#3a3a3a"
          activeColor="#4a4a4a"
          proximity={120}
          shockRadius={250}
          shockStrength={2}
          resistance={750}
          returnDuration={0.5}
        />
        {children}
      </div>
    </div>
  );
}

export default Card;
