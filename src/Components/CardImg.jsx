function CardImg({ src, onClick }) {  // ← Add onClick to props
    return (
        <div className='relative bg-neutral-900 min-w-54 grow h-70 p-5 pb-0 mb-3 rounded-xl mx-auto
              after:absolute after:inset-0 after:shadow-[inset_0_-40px_100px_rgba(0,0,0,0.95)] 
              after:pointer-events-none after:z-10 after:rounded-xl'>
            <div className='relative w-full h-full overflow-hidden rounded-lg'>
                <img 
                    src={src}
                    onClick={onClick}  // ← Add this line
                    className="absolute left-0 w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-102"
                    style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                    loading="eager"
                />
            </div>
        </div>
    )
}

export default CardImg;