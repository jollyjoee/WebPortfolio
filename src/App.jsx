import { useEffect, useState } from "react";

import Header from './Header.jsx';
import Card from './Card.jsx'
import Hero from './Hero.jsx'

function App() {
  const [pageLoc, setPageLoc] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setPageLoc(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <div>
      <Header />
      <main className='pt-28 px-10 pb-5'>
        <Hero />
        <div>
          <Card title="Ulticlick" className="grow" />
          <Card title="MinMacro" className="grow mt-5" />

          <div className="flex gap-5 flex-wrap mt-5">
            <Card title="Modrinth projects" className="grow" />
            <Card title="FiveM Scripts" className="grow" />
            <Card title="Foodify" className="grow" />
          </div>
        </div>
        <div className='flex gap-5 md:gap-5 flex-wrap mt-5'>
          <Card title="Modrinth projects" className="grow" />
          <Card title="FiveM Scripts" className="grow" />
          <Card title="Foodify" className="grow" />
        </div>
      </main>
    </div>
  );
}

export default App;

