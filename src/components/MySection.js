import {
  contactLinks,
  MyContent,
  MyStats,
  navLinks,
} from '../data/portfolioData';

function MySection() {
  return (
    <section className="My-section" id="home">
      <nav className="topbar" data-reveal="nav">
        <div className="brand-block">
          <div className="brand-mark">PA</div>
          <div className="brand-copy">
            <span>Portfolio</span>
            <strong>Poovarasan A</strong>
          </div>
        </div>
        <div className="topbar-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="My-grid">
        <div className="My-copy My-copy-centered">
          <p className="eyebrow" data-reveal="My-copy">{MyContent.lead}</p>
          <h1>
            <span data-reveal="My-copy">{MyContent.title[0]}</span>
            <span data-reveal="My-copy">{MyContent.title[1]}</span>
          </h1>
          <p className="My-summary" data-reveal="My-copy">
            {MyContent.summary}
          </p>

          <div className="My-actions" data-reveal="My-copy">
            <a className="primary-btn interactive-lift" href={MyContent.primaryAction.href}>
              {MyContent.primaryAction.label}
            </a>
            <a className="secondary-btn interactive-lift" href={MyContent.secondaryAction.href}>
              {MyContent.secondaryAction.label}
            </a>
            <a
              className="ghost-btn interactive-link"
              href="/Poovarasan_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>

          <div className="contact-strip" data-reveal="My-copy">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                className="interactive-link"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="My-stats-grid">
        {MyStats.map((stat, index) => (
          <div
            className="stat-card"
            key={stat.label}
            data-reveal="card"
            style={{ '--delay': `${0.18 + index * 0.08}s` }}
          >
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MySection;