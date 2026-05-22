import { contactDetails } from '../data/portfolioData';

function FooterSection() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-lead">
        <span>Get In Touch</span>
        <h2>Poovarasan A</h2>
        <p>
          DevOps Engineer focused on building scalable cloud infrastructure,
          automating deployment pipelines, and delivering secure, production-ready systems
          with modern cloud technologies.
        </p>
      </div>

      <div className="footer-main-grid">
        <div className="footer-contact-panel">
          <h3>Contact</h3>

          <div className="contact-list" data-reveal="column">
            {contactDetails.map((item, index) => (
              <a
                key={item.title}
                className="footer-contact-item"
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                data-reveal="card"
                style={{ '--delay': `${index * 0.08}s` }}
              >
                <span>{item.title}</span>
                <strong>{item.label}</strong>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Open to DevOps & Cloud Engineering opportunities</p>
        <a href="#contact">Let’s Connect</a>
      </div>
    </footer>
  );
}

export default FooterSection;