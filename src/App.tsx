import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/common/CookieBanner';
import { RouterProvider, useRouter } from './lib/router';
import { useLenis } from './lib/useLenis';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { HowWeWorkPage } from './pages/HowWeWorkPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { GlobalReachPage } from './pages/GlobalReachPage';
import { SectorsPage } from './pages/SectorsPage';
import { ForLocalCounselPage } from './pages/ForLocalCounselPage';
import { UtilityPage } from './pages/UtilityPage';
import { InsightsIndexPage } from './pages/InsightsIndexPage';
import { InsightArticlePage } from './pages/InsightArticlePage';
import { ContactPage } from './pages/ContactPage';

function RouteSwitch() {
  const { pathname } = useRouter();

  // Scroll to top and update document title on navigation
  useEffect(() => {
    window.scrollTo(0, 0);

    let title = 'Lex Bridge | International Legal Management & Coordination';
    if (pathname === '/about') title = 'About Lex Bridge | International Legal Management & Coordination';
    else if (pathname === '/how-we-work') title = 'How We Work | Lex Bridge';
    else if (pathname === '/services') title = 'Services Overview | Lex Bridge';
    else if (pathname.startsWith('/services/')) {
      const slug = pathname.replace('/services/', '');
      title = `${slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} | Lex Bridge`;
    }
    else if (pathname === '/global-reach') title = 'Global Reach | Lex Bridge';
    else if (pathname === '/sectors') title = 'Sectors & Industry Capabilities | Lex Bridge';
    else if (pathname === '/for-local-counsel') title = 'For Local Counsel | Lex Bridge';
    else if (pathname === '/faq') title = 'Frequently Asked Questions | Lex Bridge';
    else if (pathname === '/professional-status') title = 'Professional Status & Disclaimer | Lex Bridge';
    else if (pathname === '/privacy') title = 'Privacy Notice | Lex Bridge';
    else if (pathname === '/terms') title = 'Website Terms of Use | Lex Bridge';
    else if (pathname === '/cookies') title = 'Cookie Notice | Lex Bridge';
    else if (pathname === '/insights') title = 'Insights & Perspectives | Lex Bridge';
    else if (pathname.startsWith('/insights/')) title = 'Insight Article | Lex Bridge';
    else if (pathname === '/contact') title = 'Contact Us | Lex Bridge';

    document.title = title;
  }, [pathname]);

  // Match routes
  if (pathname === '/' || pathname === '') {
    return <HomePage />;
  }
  if (pathname === '/about') {
    return <AboutPage />;
  }
  if (pathname === '/how-we-work') {
    return <HowWeWorkPage />;
  }
  if (pathname === '/services') {
    return <ServicesOverviewPage />;
  }
  if (pathname.startsWith('/services/')) {
    const slug = pathname.replace('/services/', '');
    return <ServiceDetailPage slug={slug} />;
  }
  if (pathname === '/global-reach') {
    return <GlobalReachPage />;
  }
  if (pathname === '/sectors') {
    return <SectorsPage />;
  }
  if (pathname === '/for-local-counsel') {
    return <ForLocalCounselPage />;
  }
  if (pathname === '/faq') {
    return <UtilityPage pageType="faq" />;
  }
  if (pathname === '/professional-status') {
    return <UtilityPage pageType="professional-status" />;
  }
  if (pathname === '/privacy') {
    return <UtilityPage pageType="privacy" />;
  }
  if (pathname === '/terms') {
    return <UtilityPage pageType="terms" />;
  }
  if (pathname === '/cookies') {
    return <UtilityPage pageType="cookies" />;
  }
  if (pathname === '/contact/thank-you') {
    return <UtilityPage pageType="contact-thank-you" />;
  }
  if (pathname === '/for-local-counsel/thank-you') {
    return <UtilityPage pageType="counsel-thank-you" />;
  }
  if (pathname === '/insights') {
    return <InsightsIndexPage />;
  }
  if (pathname.startsWith('/insights/')) {
    const slug = pathname.replace('/insights/', '');
    return <InsightArticlePage slug={slug} />;
  }
  if (pathname === '/contact') {
    return <ContactPage />;
  }

  return <UtilityPage pageType="404" />;
}

function MainApp() {
  useLenis();

  return (
    <>
      <Header />
      <main>
        <RouteSwitch />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <MainApp />
    </RouterProvider>
  );
}
