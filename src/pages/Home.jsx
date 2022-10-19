import "../style/index.css";
import Header from '../components/Header';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <Banner />
          <Gallery />
        </section>
      </main>
    </div>
  );
}

export default App;
