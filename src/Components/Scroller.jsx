function InfiniteScroll({ items }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden">
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .scroll-container {
          animation: scroll-left 15s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
      
      <div className="flex">
        <div className="scroll-container gap-6 md:gap-18">
          {/* Render THREE complete sets */}
          {[...items, ...items, ...items].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="h-10 flex items-center justify-center text-white text-lg font-bold shrink-0 gap-3 whitespace-nowrap"
            >
              <img src={item.iconPath} alt={item.text} className="w-6 h-6" />
              {item.text}
            </div>
          ))}
        </div>
        
        {/* Duplicate the ENTIRE container for true seamlessness */}
        <div className="scroll-container gap-6 md:gap-18" style={{ animationDelay: '-7.5s' }}>
          {[...items, ...items, ...items].map((item, idx) => (
            <div
              key={`dup-${item.id}-${idx}`}
              className="h-10 flex items-center justify-center text-white text-lg font-bold shrink-0 gap-3 whitespace-nowrap"
            >
              <img src={item.iconPath} alt={item.text} className="w-6 h-6" />
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfiniteScroll;