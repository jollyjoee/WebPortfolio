import { useEffect, useRef } from 'react';

function InfiniteScroll({ items }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPos = 0;
    let animationId;
    
    const scroll = () => {
      scrollPos += 0.3; // Slower for smoother effect
      
      const scrollWidth = scrollContainer.scrollWidth;
      const singleSetWidth = scrollWidth / 3; // render 3 copies
      
      // Reset seamlessly when first set scrolls out of view
      if (scrollPos >= singleSetWidth) {
        scrollPos = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft = scrollPos;
      }
      
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="w-full rounded-2xl">
      <div ref={scrollRef}className="overflow-hidden flex gap-6 md:gap-18 h-10" style={{ scrollBehavior: 'auto' }}>
        {/* Render items THREE times for seamless loop */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="h-full flex items-center justify-center text-white text-lg font-bold shrink-0 gap-3 whitespace-nowrap"
          >
            <img src={item.iconPath} alt={item.text} className="w-6 h-6" />
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteScroll;