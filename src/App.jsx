import { useState, useEffect } from 'react';

import Header from './Header.jsx';
import Card from './Components/Card.jsx'
import ModrinthStats from './ModrinthStats.jsx'
import CardImg from './Components/CardImg.jsx'
import InfiniteScroll from './Components/Scroller.jsx';

import Hero from './Pages/Hero.jsx'
import About from './Pages/About.jsx'

import Ulticlick from './assets/ulticlick.png'
import Ucapi from './assets/ucapi.png'
import Cloudflare from './assets/cloudflare-icon.svg'
import CSSIcon from './assets/css-3.svg'
import MMLogin from './assets/minmacrologin.png'
import MMHome from './assets/minmacrohome.png'

import Aurora from './Background/Aurora.jsx'


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
    },
    {
      id: 5,
      text: 'HTML5',
      iconPath: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    },
    {
      id: 6,
      text: 'CSS',
      iconPath: CSSIcon,
    }
  ];

  const mmStack = [
    { 
      id: 1, 
      text: 'MySQL', 
      iconPath: 'https://www.svgrepo.com/show/303251/mysql-logo.svg'
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
      text: 'HTML5',
      iconPath: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    },
    {
      id: 5,
      text: 'CSS',
      iconPath: CSSIcon,
    },
    {
      id: 6,
      text: 'Python',
      iconPath: 'https://www.svgrepo.com/show/452091/python.svg',
    }
  ];

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setShowOverlay(false)
    }
    
    if (showOverlay) {
      window.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' 
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [showOverlay])

  const handleImageClick = (image) => {
    setOverlayImage(image)
    setShowOverlay(true)
  }
  

  return (
    <div className="min-h-screen min-w-full bg-linear-to-b from-gray-900 to-black" /*onContextMenu={(e) => e.preventDefault()}*/>
      <div className='fixed min-w-screen h-100'>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.8}
          amplitude={1.0}
          speed={0.5} 
        />
      </div>
      <Header />
      <main className='pt-28 px-10 md:px-60 pb-5'>
        <span id="hero"><Hero /></span>

        <div id="projects" className="h-20 w-full" />
          <Card title="Ulticlick" className="grow">
            <div className="w-full h-full p-5">
              <div className='flex flex-col w-full gap-2 pb-3'>
                <div className='md:text-4xl text-xl font-extrabold w-full text-center tracking-widest pt-2 text-wrap z-100'>JAVA AUTOMATION SOFTWARE</div>
                <div className='md:text-2xl text-sm font-bold w-full text-center tracking-wide z-100'>with Cloudflare Auth</div>
              </div>
              <div className='flex gap-5 flex-wrap'> 
                <CardImg src={Ucapi} onClick={() => handleImageClick(Ucapi)} />
                <CardImg src={Ulticlick} onClick={() => handleImageClick(Ulticlick)} />
              </div>
              <div className='w-full h-fit mx-auto md:px-25'><InfiniteScroll items={ucStack} /></div>
            </div>
          </Card>
          <Card title="MinMacro" className="grow mt-5">
            <div className="w-full h-full p-5">
              <div className='flex flex-col w-full gap-2 pb-3'>
                <div className='md:text-4xl text-xl font-extrabold w-full text-center tracking-widest pt-2 text-wrap z-100'>LOW-LEVEL GAME AUTOMATION</div>
                <div className='md:text-2xl text-sm font-bold w-full text-center tracking-wide z-100'>with remote MySQL Integration</div>
              </div>
              <div className='flex gap-5 flex-wrap'> 
                <CardImg src={MMLogin} onClick={() => handleImageClick(MMLogin)} />
                <CardImg src={MMHome} onClick={() => handleImageClick(MMHome)} />
              </div>
              <div className='w-full h-fit mx-auto md:px-25'><InfiniteScroll items={mmStack} /></div>
            </div>
          </Card>
  
          <div className="flex gap-5 flex-wrap mt-5 items-stretch">
            <Card title="Modrinth projects" className="grow">
              <div className='flex flex-col gap-2 z-150 h-full w-full items-center p-3'>
                <div className='md:text-4xl text-xl font-extrabold w-full text-center tracking-widest pt-2 text-wrap z-100'><a href="https://www.modrinth.com/user/JollyJoe" target="_blank" className="
                    inline-block relative 
                    after:absolute after:left-0 after:-bottom-1
                    after:h-0.5 after:w-0 after:bg-current after:transition-all   
                    after:duration-200 hover:after:w-full">Modrinth Plugin Developer</a></div>
                <ModrinthStats />
                <Card title="Modrinth Sub" className='grow w-full'></Card>
              </div>
            </Card>
            <Card title="FiveM Scripts" className='grow'>
              <div className='flex flex-col gap-2 z-150 h-full w-full items-center p-3'>
                <div className='md:text-4xl text-xl font-extrabold w-full text-center tracking-widest pt-2 text-wrap z-100'>FiveM Script Developer</div>
              </div>
            </Card>
            <Card title="Foodify" className='grow'/>
          </div>
          <div className='h-20 w-full flex items-center justify-center' id="about"></div>
          <div className='relative'><About /></div>
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