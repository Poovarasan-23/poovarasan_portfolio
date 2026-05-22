import { processSteps } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

function ProcessSection() {
  return (
    <section className="content-card" id="process">
      <SectionHeading
        label="DevOps Workflow"
        eyebrow="My Engineering Process."
        title="From infrastructure design to reliable production deployment"
        intro="I follow a structured DevOps approach to ensure systems are scalable, automated, and production-ready with strong focus on reliability and performance."
      />

      <div className="process-grid">
        {processSteps.map((step, index) => (
          <article
            className="process-card interactive-card"
            key={step.title}
            data-reveal="card"
            style={{ "--delay": `${index * 0.1}s` }}
          >
            <span className="process-index">{step.icon}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;