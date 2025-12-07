import { Hero } from './components/Hero';
import { Systems } from './components/Systems';
import { Automations } from './components/Automations';
import { Contact } from './components/Contact';
import { Header } from './components/Header';

function App() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Header />
      <Hero />
      <Systems />
      <Automations />
      <Contact />
    </main>
  );
}

export default App;
