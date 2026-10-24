import { footer } from '../content';

const Footer = () => (
  <footer className="footer">
    <div className="wrap">
      <p>{footer.text}</p>
      <p><a href={footer.source.href} target="_blank" rel="noopener noreferrer">{footer.source.label}</a></p>
    </div>
  </footer>
);

export default Footer;
