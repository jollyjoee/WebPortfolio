import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

function HoverTooltip({ 
  children, 
  content, 
  widthMultiplier = 3,
  offset = 8,
  animationDuration = 200 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [width, setWidth] = useState(0);
  const timeoutRef = useRef(null);
  const triggerRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
    }

    if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        const triggerWidth = rect.right - rect.left;
        const newWidth = triggerWidth * widthMultiplier;
        
        setWidth(newWidth);
        setPosition({
        top: rect.bottom + window.scrollY + offset,
        left: rect.left + (triggerWidth / 2) - (newWidth / 2) // ← Center alignment
        });
        setIsVisible(true);
        setIsAnimating(false);
        setTimeout(() => setIsAnimating(true), 10);
    }
  }, [widthMultiplier, offset]);

  const handleMouseLeave = useCallback(() => {
    setIsAnimating(false);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      timeoutRef.current = null;
    }, animationDuration);
  }, [animationDuration]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div 
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>

      {isVisible && createPortal(
        <div
          className={`absolute px-5 py-2 h-fit bg-neutral-800/90 rounded-2xl 
            z-9999 shadow-[inset_0px_0px_47px_-16px_#0f0f0f] 
            transition-all duration-${animationDuration} ease-out
            ${isAnimating 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 -translate-y-2 scale-95'
            }`}
          style={{ 
            top: `${position.top + 3}px`, 
            left: `${position.left}px`, 
            width: `${width}px` 
          }}
        >
          {/* Automatically animated wrapper */}
          <div className={`${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
            {content}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default HoverTooltip;