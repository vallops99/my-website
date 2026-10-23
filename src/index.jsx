import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
// PROTOTYPE (#10): in dev, `?variant=` renders the design-system prototype instead of the site.
// Both are loaded lazily so the current site's global CSS doesn't bleed into the variants.
const variant = import.meta.env.DEV && new URLSearchParams(window.location.search).get('variant');

if (variant) {
  import('./prototype-design-system/DesignSystemPrototype.jsx').then(({ default: DesignSystemPrototype }) =>
    root.render(<DesignSystemPrototype variantKey={variant} />),
  );
} else {
  import('./App').then(({ default: App }) =>
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    ),
  );
}
