import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Card from './Card.jsx'
import Hero from './Hero.jsx'
import ModrinthStats from './ModrinthStats.jsx'
import Ulticlick from './assets/ulticlick.png'
import Ucapi from './assets/ucapi.png'
import InfiniteScroll from './Sroller.jsx';
import Cloudflare from './assets/cloudflare-icon.svg'
import Aurora from './Aurora.jsx'
function App() {
  const [showOverlay, setShowOverlay] = useState(false)
  const [overlayImage, setOverlayImage] = useState(null)

  const ucStack = [
    { 
      id: 1, 
      text: 'Java', 
      iconPath: 'https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/java/java-plain.svg'
    },
    { 
      id: 2, 
      text: 'JavaScript', 
      iconPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      id: 3,
      text: 'AutoHotKey',
      iconPath: 'https://raw.githubusercontent.com/AutoHotkey/AutoHotkey/a34bc07d357b7299ca229757162cef8a91e37f52/source/resources/icons.svg'
    },
    {
      id: 4,
      text: 'Cloudflare',
      iconPath: Cloudflare
    }
  ];

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setShowOverlay(false)
    }
    
    if (showOverlay) {
      window.addEventListener('keydown', handleEscape)
    }
    
    return () => window.removeEventListener('keydown', handleEscape)
  }, [showOverlay])

  const handleImageClick = (image) => {
    setOverlayImage(image)
    setShowOverlay(true)
  }
  

  return (
    <div className="min-h-screen min-w-full bg-linear-to-b from-gray-900 to-black">
      <div className='fixed min-w-screen h-100'>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.8}
          amplitude={1.0}
          speed={0.5} // Slower = less CPU
        />
      </div>
      <Header />
      <main className='pt-28 px-10 md:px-60 pb-5'>
        <div id="hero"><Hero /></div>
        <div id="projects" className="h-20 w-full" />
        <div>
          <Card title="Ulticlick" className="grow gap-5 max-w-fit">
            <div className='flex flex-col w-full gap-2'>
              <div className='md:text-4xl text-xl font-extrabold w-full text-center tracking-[10px] pt-2 text-wrap'>JAVA AUTOMATION SOFTWARE</div>
              <div className='md:text-2xl text-sm font-bold w-full text-center tracking-[5px]'>with Cloudflare Auth</div>
            </div>
            <div className='relative bg-neutral-900 min-w-54 grow h-70 p-5 pb-0 rounded-xl mx-auto
            after:absolute after:inset-0 after:shadow-[inset_0_-40px_100px_rgba(0,0,0,0.95)] 
            after:pointer-events-none after:z-10 after:rounded-xl'>
              <div className='relative w-full h-full overflow-hidden rounded-lg'>
                <img 
                  src={Ucapi} 
                  className="absolute left-0 w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-102"
                  style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                  onClick={() => handleImageClick(Ucapi)}
                  loading="eager"
                />
              </div>
            </div>
            <div className='w-full h-fit mx-auto md:px-25'><InfiniteScroll items={ucStack} /></div>
          </Card>
          <Card title="MinMacro" className="grow mt-5" />
          <div className="flex gap-5 flex-wrap mt-5 items-stretch">
            <Card title="Modrinth projects" className="grow">
              <ModrinthStats />
            </Card>
            <Card title="FiveM Scripts" className="grow" />
            <Card title="Foodify" className="grow" />
          </div>
        </div>
      </main>

      {/* Fullscreen Overlay */}
      {showOverlay && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 overflow-auto"
          onClick={() => setShowOverlay(false)}
        >
          <div className="min-h-screen flex justify-center py-20 mx-auto">
            <img 
              src={overlayImage} 
              className="max-w-90 md:max-w-150 h-auto object-contain"
              alt="Expanded view"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;