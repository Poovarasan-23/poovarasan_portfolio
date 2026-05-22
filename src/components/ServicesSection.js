import { services } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

function ServicesSection() {
  return (
    <section className="content-card" id="services">
      <SectionHeading
        label="DevOps Services"
        eyebrow="What I Do"
        title="Cloud, automation, and scalable infrastructure solutions"
        intro="Designing and implementing end-to-end DevOps solutions including CI/CD pipelines, cloud infrastructure, containerization, Kubernetes orchestration, and deployment automation for production-ready systems."
      />

      <div className="service-grid">
        {services.map((service, index) => (
          <article
            className="service-card interactive-card"
            key={service.title}
            data-reveal="card"
            style={{ "--delay": `${index * 0.08}s` }}
          >
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;