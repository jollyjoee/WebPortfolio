import { useEffect, useRef, useState } from "react";
import Picture from '../assets/react.svg';

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
            className={`w-full min-h-120 mx-auto flex flex-col mb-10 mt-20 transition-all duration-700 justify-center
                ${visible ? "opacity-100 scale-100" : "rotate-300 scale-0 opacity-0"}
            `}
            >
                <span className="w-full text-center md:text-6xl text-4xl font2 tracking-wider">Crafting Code, Designing Solutions</span>
                <img src={Picture} className={`w-35 h-35 text-center mx-auto rounded-[200px] my-5 transition duration-300`}/>
                <span className="w-full text-center md:text-xl text-lg font2 tracking-wider">Hi I'm Julijo Pisk</span>
            </div>
        </div>
    )
}

export default Hero;
