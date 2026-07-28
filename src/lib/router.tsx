import React, { createContext, useContext, useEffect, useState } from 'react';

interface RouterContextType {
  pathname: string;
  navigate: (href: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  pathname: '/',
  navigate: () => {},
});

/**
 * Normalizes pathname by stripping Vite base path (e.g. /Lex-bridge/) if present.
 */
function getNormalizedPath(): string {
  const path = window.location.pathname;
  // Handle /Lex-bridge or /Lex-bridge/ prefix for GitHub Pages
  const basePathMatch = path.match(/^\/Lex-bridge(\/.*)?$/i);
  if (basePathMatch) {
    return basePathMatch[1] || '/';
  }
  return path || '/';
}

/**
 * Formats internal href into full URL path including base path if running on GitHub Pages subpath.
 */
export function getFullPath(href: string): string {
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }
  const currentPath = window.location.pathname;
  if (currentPath.startsWith('/Lex-bridge') && !href.startsWith('/Lex-bridge')) {
    return `/Lex-bridge${href.startsWith('/') ? '' : '/'}${href}`;
  }
  return href;
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState<string>(getNormalizedPath);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(getNormalizedPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (href: string) => {
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      window.location.href = href;
      return;
    }
    const fullPath = getFullPath(href);
    if (window.location.pathname + window.location.search !== fullPath) {
      window.history.pushState({}, '', fullPath);
      setPathname(getNormalizedPath());
      window.scrollTo(0, 0);
    }
  };

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children, onClick, className, ...props }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    // If modifier keys pressed or not standard click, let browser handle (e.g. open in new tab)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
      return;
    }

    // Hash links on same page
    if (href.startsWith('#')) {
      return;
    }

    e.preventDefault();
    navigate(href);
  };

  return (
    <a href={getFullPath(href)} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
