import Header from './components/Header';
import Hero from './components/Hero';
import Help from './components/Help';
import MoreWork from './components/MoreWork';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Help />
        <MoreWork />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
