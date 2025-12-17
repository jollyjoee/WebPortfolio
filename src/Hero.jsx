import { useEffect, useRef, useState } from "react";
import Picture from './assets/vite.svg';

function Hero() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(true);

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
            className={`w-full min-h-170 mx-auto flex flex-col py-10 mb-10 transition-all duration-700 justify-center
                ${visible ? "opacity-100 scale-100" : "rotate-300 scale-0 opacity-0"}
            `}
            >
                <span className="w-full text-center text-6xl font2 ">Hi there!</span>
                <span className="w-full text-center text-xl my-5 font2">Di ko pa alam ilalagay ko dito</span>
                <img src={Picture} className={`w-35 h-35 text-center text-xl mx-auto rounded-[200px] mb-5 transition duration-300`}/>
            </div>
        </div>
    )
}

export default Hero;
