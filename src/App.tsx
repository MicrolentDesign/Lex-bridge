import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ModelBand } from './components/ModelBand';
import { CredibilityStrip } from './components/CredibilityStrip';
import { TheBridge } from './components/TheBridge';
import { CoreServices } from './components/CoreServices';
import { WhyLexBridge } from './components/WhyLexBridge';
import { RepresentativeMandates } from './components/RepresentativeMandates';
import { HowWeWorkSteps } from './components/HowWeWorkSteps';
import { GlobalReachBand } from './components/GlobalReachBand';
import { WhoWeSupport } from './components/WhoWeSupport';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { useLenis } from './lib/useLenis';

/**
 * Homepage section order per v2.0 T1.
 *
 * §12 Featured insight is deliberately omitted: v2.0 T1 says to drop it entirely if
 * Insights is not live at launch, and the three launch articles are still unwritten
 * (PLAN.md §2.2). An empty insight card does more damage than no card.
 */
function App() {
  useLenis();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ModelBand />
        <CredibilityStrip />
        <TheBridge />
        <CoreServices />
        <WhyLexBridge />
        <RepresentativeMandates />
        <HowWeWorkSteps />
        <GlobalReachBand />
        <WhoWeSupport />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

export default App;
