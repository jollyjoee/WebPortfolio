import Header from './Header.jsx';
import Card from './Card.jsx'
import Hero from './Hero.jsx'
import ModrinthStats from './ModrinthStats.jsx'

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 to-black">
      <Header />
      <main className='pt-28 px-10 md:px-60 pb-5'>
        <div id="hero"><Hero /></div>
        <div id="projects" className="h-20 w-full" />
        <div>
          <Card title="Ulticlick" className="grow" />
          <Card title="MinMacro" className="grow mt-5" />

          <div className="flex gap-5 flex-wrap mt-5">
            <Card title="Modrinth projects" className="grow">
              <ModrinthStats />
            </Card>
            <Card title="FiveM Scripts" className="grow" />
            <Card title="Foodify" className="grow" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

