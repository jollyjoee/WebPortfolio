import Header from './Header.jsx';
import Card from './Card.jsx'

function App() {
  return (
    <div>
      <Header />
      <main className='pt-28 px-10 pb-10 flex gap-5 flex-wrap'>
        <Card title="Ulticlick" />
        <Card title="Modrinth projects" />
        <Card title="MinMacro" />
        <Card title="Foodify" />
        <Card title="FiveM Scripts" />
      </main>
    </div>
  );
}

export default App;

