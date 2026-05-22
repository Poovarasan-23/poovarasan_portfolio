import { experience, experience2 } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

function ExperienceSection() {
  return (
    <section className="content-card" id="experience">
      <SectionHeading
        label="DevOps Journey"
        eyebrow="Professional Experience."
        title="Building scalable infrastructure and automating modern deployment workflows"
        intro="My experience spans cloud infrastructure management, CI/CD automation, containerization, Kubernetes orchestration, and production-ready deployment solutions using modern DevOps practices."
      />

      <div className="timeline-item interactive-card" data-reveal="card">
        <div className="timeline-meta">
          <h3>{experience.role}</h3>
          <span>{experience.period}</span>
        </div>

        <p className="timeline-company">{experience.company}</p>

        <ul className="detail-list">
          {experience.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="timeline-item interactive-card" data-reveal="card">
        <div className="timeline-meta">
          <h3>{experience2.role}</h3>
          <span>{experience2.period}</span>
        </div>

        <p className="timeline-company">{experience2.company}</p>

        <ul className="detail-list">
          {experience2.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>

    </section>
  );
}
export default ExperienceSection;