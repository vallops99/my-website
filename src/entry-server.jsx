import { renderToString } from 'react-dom/server';
import App from './App';

// Used by the prerender plugin in vite.config.js at build time.
export function render() {
  return renderToString(<App />);
}
