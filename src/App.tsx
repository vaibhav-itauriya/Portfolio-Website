import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CaseDecks from './components/CaseDecks';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Background from './components/Background';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <CaseDecks />
        <Achievements />
        <Leadership />
        <Background />
        <Contact />
      </main>
      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-page flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Vaibhav Itauriya</p>
          <p>Built with React and Tailwind</p>
        </div>
      </footer>
    </>
  );
}
