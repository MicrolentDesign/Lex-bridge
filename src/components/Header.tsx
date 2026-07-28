import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import logo from '../assets/logo.png';
import { primaryNav, serviceGroups, serviceMenuFooterLinks, utilityLink, primaryCta } from '../lib/nav';
import { suspendLenis, resumeLenis } from '../lib/lenis';
import { Link } from '../lib/router';

/**
 * v2.0 §3.1 — sticky, never disappears, condenses on scroll.
 * v2.0 §3.2 — three-column services mega-menu, hover-triggered.
 *
 * Structure: a subordinate utility strip (navy, small type) over one main bar.
 * The earlier two-equal-rows version read as two stacked headers with no hierarchy —
 * the strip is visibly secondary, so the main bar is unambiguously the header.
 * On scroll the strip collapses and the main bar tightens; the bar itself persists.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /**
   * Lock the page and hand wheel/touch back to the browser while the drawer is open.
   *
   * suspendLenis() is the part that actually fixes nested scrolling: Lenis otherwise
   * preventDefault()s wheel events and drives the window scroller, so the drawer's own
   * overflow container never receives them. body overflow:hidden alone did NOT fix this —
   * it stopped the page moving but left the drawer unable to scroll, which is what read
   * as "frozen". overflow:hidden is kept for the reduced-motion path, where no Lenis
   * instance exists to suspend.
   */
  useEffect(() => {
    if (!mobileOpen) return;

    suspendLenis();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
      resumeLenis();
    };
  }, [mobileOpen]);

  // Escape closes the drawer — expected of any full-screen overlay.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  function openServices() {
    window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }
  function scheduleCloseServices() {
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 150);
  }

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-hairline">
      {/* Utility strip — desktop only, collapses on scroll. Deliberately subordinate. */}
      <div
        className={`hidden lg:block bg-navy-900 overflow-hidden transition-[max-height,opacity] duration-300 ease-(--ease-brand) ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
        }`}
      >
        <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
          <div className="flex items-center justify-end gap-6 h-9">
            <span className="text-legal text-white/60">Hong Kong</span>
            <span className="h-3 w-px bg-white/20" aria-hidden="true" />
            <Link href={utilityLink.href} className="block py-2.5 text-legal text-white/80 hover:text-white transition-colors">
              {utilityLink.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar — logo left, nav + CTA right. One row at every breakpoint. */}
      <div className="mx-auto max-w-(--container-shell) px-6 md:px-10">
        <div
          className={`flex items-center justify-between gap-8 transition-[padding] duration-300 ease-(--ease-brand) ${
            scrolled ? 'py-3' : 'py-4'
          }`}
        >
          <Link href="/" className="flex items-center gap-4 py-2 -my-2 shrink-0">
            <img
              src={logo}
              alt="Lex Bridge Advisory Group"
              width={1275}
              height={239}
              className={`w-auto transition-[height] duration-300 ease-(--ease-brand) ${scrolled ? 'h-7' : 'h-9'}`}
            />
            <span className="hidden xl:inline-block border-l border-hairline pl-4 text-legal text-ink-60 leading-snug max-w-60">
              International Legal Management &amp; Coordination
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex items-center gap-7">
              {primaryNav.map((item) =>
                item.hasMegaMenu ? (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleCloseServices}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1.5 py-2.5 text-body-sm font-medium text-navy-900 hover:text-gold-500 transition-colors whitespace-nowrap"
                      aria-expanded={servicesOpen}
                    >
                      {item.label}
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        aria-hidden="true"
                        className={`transition-transform duration-300 ease-(--ease-brand) ${servicesOpen ? 'rotate-180' : ''}`}
                      >
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </Link>

                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2.5 text-body-sm font-medium text-navy-900 hover:text-gold-500 transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <Link
              href={primaryCta.href}
              className="hidden lg:inline-flex items-center rounded-btn bg-navy-900 px-5 py-2.5 text-body-sm font-medium text-white hover:bg-navy-700 transition-colors whitespace-nowrap"
            >
              {primaryCta.label}
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-btn border border-hairline text-navy-900"
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
                <path d="M0 1H18M0 7H18M0 13H18" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/*
        Mega-menu panel is anchored to the HEADER, not to the "Services" nav item.
        Anchored to the trigger it ran 920px from a mid-header origin and overflowed the
        right edge of the viewport. Spanning the container instead can't overflow at any
        width, and reads as a deliberate full-width panel.

        Four columns: three service groups plus a tinted wayfinding panel. The Sectors /
        View-all links live in that panel rather than a full-width row beneath the
        columns, which had duplicated links already one click away.
      */}
      {servicesOpen && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full"
          onMouseEnter={openServices}
          onMouseLeave={scheduleCloseServices}
        >
          <div className="mx-auto max-w-(--container-shell) px-6 md:px-10 pt-3">
            <div className="overflow-hidden rounded-card border border-hairline bg-paper shadow-[0_16px_40px_-12px_rgba(0,30,76,0.18)]">
              <div className="grid grid-cols-[1fr_1fr_1fr_0.9fr]">
                {serviceGroups.map((group) => (
                  <div key={group.title} className="p-7 border-r border-hairline">
                    <p className="text-eyebrow uppercase text-gold-500 mb-5">{group.title}</p>
                    <ul className="flex flex-col -my-1">
                      {group.items.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            onClick={() => setServicesOpen(false)}
                            className="group/link flex items-start gap-2.5 py-2 text-body-sm text-ink hover:text-navy-900 leading-snug transition-colors"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy-900/25 group-hover/link:bg-gold-500 transition-colors" />
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="p-7 bg-tint flex flex-col">
                  <p className="text-eyebrow uppercase text-navy-900 mb-3">Not sure which applies?</p>
                  <p className="text-body-sm text-ink mb-6">
                    Tell us the objective and the jurisdictions. We will suggest a coordination model.
                  </p>
                  <div className="mt-auto flex flex-col gap-3">
                    {serviceMenuFooterLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setServicesOpen(false)}
                        className="text-body-sm font-medium text-navy-900 hover:text-gold-500 transition-colors"
                      >
                        {l.label} &rarr;
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*
        Portalled to document.body — not only for z-index, but because `backdrop-blur-sm`
        on this <header> creates a CSS containing block (backdrop-filter does, like
        transform/filter/contain). A `fixed inset-0` child nested inside resolves against
        the header's own box instead of the viewport: measured 125px tall before this fix.
      */}
      {mobileOpen && createPortal(<MobileDrawer onClose={() => setMobileOpen(false)} />, document.body)}
    </header>
  );
}

/**
 * DESIGN-DIRECTION.md §7 originally ruled out a collapsible submenu here, on the grounds
 * that none of the five references implemented one. Revised: those references carried
 * ~6 flat links, while our IA is ten services in three groups. Left permanently
 * expanded, the drawer ran past 1,700px and the six top-level destinations were buried
 * below the services list — which is what "unorganised" was describing. The three group
 * labels are still static headers once open; only the disclosure is new.
 */
function MobileDrawer({ onClose }: { onClose: () => void }) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-paper lg:hidden">
      <div className="flex shrink-0 items-center justify-between px-6 py-4 border-b border-hairline">
        {/* h-9 matches the page header's unscrolled size — at h-8 the logo visibly
            shrank the moment the drawer opened over it. */}
        <img
          src={logo}
          alt="Lex Bridge Advisory Group"
          width={1275}
          height={239}
          className="h-9 w-auto shrink-0"
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-btn border border-hairline text-navy-900"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/*
        Rendered in primaryNav order so Services stays in slot 2, as in the desktop nav.

        `min-h-0` is load-bearing: `flex-1` sets flex-basis:0 but a column flex item keeps
        min-height:auto, so this nav grew to its full content height instead of shrinking
        to the container. overflow-y-auto then had nothing to scroll while body scroll was
        locked — the whole drawer appeared frozen once Services was expanded.
      */}
      <nav
        data-lenis-prevent
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-2 [-webkit-overflow-scrolling:touch]"
      >
        {primaryNav.map((item) =>
          item.hasMegaMenu ? (
            <div key={item.href} className="border-b border-hairline">
              <div className="flex items-stretch">
                <a href={item.href} className="flex-1 py-4 text-display-m text-navy-900">
                  {item.label}
                </a>
                <button
                  type="button"
                  onClick={() => setServicesExpanded((v) => !v)}
                  aria-expanded={servicesExpanded}
                  aria-label={servicesExpanded ? 'Collapse services' : 'Expand services'}
                  className="ml-4 my-2 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-btn border border-hairline text-navy-900"
                >
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    aria-hidden="true"
                    className={`transition-transform duration-300 ease-(--ease-brand) ${servicesExpanded ? 'rotate-180' : ''}`}
                  >
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {servicesExpanded && (
                <div className="mb-4 rounded-card bg-base px-4 pt-1 pb-5">
                  <div className="flex flex-col gap-5 pt-4">
                    {serviceGroups.map((group) => (
                      <div key={group.title}>
                        <p className="text-eyebrow uppercase text-gold-500 mb-2">{group.title}</p>
                        <ul className="flex flex-col -my-1">
                          {group.items.map((s) => (
                            <li key={s.href}>
                              <a href={s.href} className="block py-2.5 text-body-sm text-ink leading-snug">
                                {s.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="flex flex-col border-t border-hairline pt-2">
                      {serviceMenuFooterLinks.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          className="block py-2.5 text-body-sm font-medium text-navy-900"
                        >
                          {l.label} &rarr;
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <a
              key={item.href}
              href={item.href}
              className="block py-4 border-b border-hairline text-display-m text-navy-900"
            >
              {item.label}
            </a>
          ),
        )}

        <a href={utilityLink.href} className="block py-4 text-body font-medium text-ink-60">
          {utilityLink.label}
        </a>
      </nav>

      {/* Pinned so the primary action is reachable without scrolling the whole list. */}
      <div className="shrink-0 border-t border-hairline bg-paper px-6 py-4">
        <a
          href={primaryCta.href}
          className="flex items-center justify-center rounded-btn bg-navy-900 px-5 py-4 text-body font-medium text-white"
        >
          {primaryCta.label}
        </a>
      </div>
    </div>
  );
}
