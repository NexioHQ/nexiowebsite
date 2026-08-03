import { createRoot } from 'react-dom/client';

import App from './App';
import { initAnalytics } from './lib/firebase';

import './index.css';

createRoot(document.getElementById('root')!).render(<App />);

// Defer Firebase Analytics initialization until after the page is interactive,
// so it doesn't block first paint or initial load.
if (typeof window !== 'undefined') {
  const init = () => {
    initAnalytics().catch(() => {
      /* analytics is non-critical */
    });
  };

  const w = window as unknown as {
    requestIdleCallback?: (cb: () => void) => void;
  };

  if (typeof w.requestIdleCallback === 'function') {
    w.requestIdleCallback(init);
  } else {
    setTimeout(init, 2000);
  }
}
