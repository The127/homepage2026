import { onMount, onCleanup } from 'solid-js';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Projects from './components/Projects';
import Libraries from './components/Libraries';
import Books from './components/Books';
import Create from './components/Create';
import Footer from './components/Footer';

export default function App() {
  onMount(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll('.rv').forEach(el => obs.observe(el));
    onCleanup(() => obs.disconnect());
  });

  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <Projects />
      <Libraries />
      <Books />
      <Create />
      <Footer />
    </>
  );
}
