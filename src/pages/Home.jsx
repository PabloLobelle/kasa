import Header from '../components/Header';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import '../style/home.css'

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <Gallery />
      </main>
    </div>
  );
}

export default App;