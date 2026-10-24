import { nav } from '../content';

const Header = () => (
  <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="header">
      <div className="wrap header-in">
        <a href="#top" className="logo">
          <span className="mark" aria-hidden="true">VF</span>
          <span className="logo-name">Valerio Farrotti</span>
        </a>
        <nav aria-label="Main">
          <ul>
            {nav.map((n) => (
              <li key={n.href}><a href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <a className="btn btn-secondary btn-sm mobile-only" href="#contact">Contact</a>
      </div>
    </header>
  </>
);

export default Header;
