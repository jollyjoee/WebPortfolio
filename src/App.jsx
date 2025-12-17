import Header from './Header.jsx';
import Card from './Card.jsx'

function App() {
  return (
    <div>
      <Header />
      <main className='pt-28 px-10 pb-5'>
        <div>
          <Card title="Ulticlick" className="grow min-h-120" />
          <Card title="MinMacro" className="grow mt-5 min-h-120" />
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

