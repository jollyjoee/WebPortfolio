import { useEffect, useRef, useState } from "react";

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
        bg-neutral-900 p-4 rounded-xl shadow-[inset_0px_0px_72px_-9px_rgba(0,_0,_0,_0.44)]
        transition-all duration-700 ease-out
        ${className}
        ${visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
