import { Hero } from '../components/Hero';
import { ModelBand } from '../components/ModelBand';
import { CredibilityStrip } from '../components/CredibilityStrip';
import { TheBridge } from '../components/TheBridge';
import { CoreServices } from '../components/CoreServices';
import { WhyLexBridge } from '../components/WhyLexBridge';
import { RepresentativeMandates } from '../components/RepresentativeMandates';
import { HowWeWorkSteps } from '../components/HowWeWorkSteps';
import { GlobalReachBand } from '../components/GlobalReachBand';
import { WhoWeSupport } from '../components/WhoWeSupport';
import { FinalCta } from '../components/FinalCta';

export function HomePage() {
  return (
    <>
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
    </>
  );
}
