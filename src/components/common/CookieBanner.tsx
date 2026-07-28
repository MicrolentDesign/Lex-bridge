import { useEffect, useState } from 'react';
import { Link } from '../../lib/router';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('lb_cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('lb_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('lb_cookie_consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6 bg-paper border-t border-hairline shadow-2xl">
      <div className="mx-auto max-w-(--container-shell) flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="max-w-3xl">
          <p className="text-body-sm font-semibold text-navy-900 mb-1">Privacy &amp; Cookie Preferences</p>
          <p className="text-body-sm text-ink-60 leading-normal">
            We use essential cookies to ensure site functionality. Non-essential analytical cookies fire only with your explicit consent. Read our{' '}
            <Link href="/cookies" className="underline hover:text-navy-900">
              Cookie Notice
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="underline hover:text-navy-900">
              Privacy Notice
            </Link>
            .
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
          <button
            type="button"
            onClick={() => setShowManage((v) => !v)}
            className="px-4 py-2 text-body-sm font-medium text-ink-60 hover:text-navy-900 transition-colors"
          >
            Manage
          </button>
          <button
            type="button"
            onClick={handleReject}
            className="rounded-btn border border-hairline px-4 py-2 text-body-sm font-medium text-navy-900 hover:bg-base transition-colors"
          >
            Reject Optional
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-btn bg-navy-900 px-5 py-2 text-body-sm font-medium text-white hover:bg-navy-700 transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>

      {showManage && (
        <div className="mx-auto max-w-(--container-shell) mt-4 pt-4 border-t border-hairline grid grid-cols-1 sm:grid-cols-3 gap-4 text-body-sm">
          <div className="p-3 bg-base rounded-card">
            <span className="font-semibold text-navy-900 block mb-1">Essential Cookies</span>
            <span className="text-ink-60 text-xs">Required for core website security and navigation. Always active.</span>
          </div>
          <div className="p-3 bg-base rounded-card">
            <span className="font-semibold text-navy-900 block mb-1">Analytics Cookies</span>
            <span className="text-ink-60 text-xs">Help us measure aggregated visitor traffic and page performance.</span>
          </div>
          <div className="p-3 bg-base rounded-card">
            <span className="font-semibold text-navy-900 block mb-1">Functional Cookies</span>
            <span className="text-ink-60 text-xs">Remember user preferences such as mobile drawer state.</span>
          </div>
        </div>
      )}
    </div>
  );
}
