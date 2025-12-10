import { Hero } from './components/Hero';
import { Systems } from './components/Systems';
import { Automations } from './components/Automations';
import { Integrations } from './components/Integrations';
import { Cases } from './components/Cases';
import { Contact } from './components/Contact';
import { Header } from './components/Header';

function App() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30 relative">
      <Header />
      <Hero />
      <Integrations />
      <Systems />
      <Automations />
      <Cases />
      <Contact />
    </main>
  );
}

export default App;
