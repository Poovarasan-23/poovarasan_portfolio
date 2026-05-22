import { projects } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

function ProjectsSection() {
  return (
    <section className="content-card" id="projects">
      <SectionHeading
        label="Projects"
        eyebrow="DevOps & Cloud Projects."
        title="Production-ready projects focused on CI/CD, cloud infrastructure, and scalable deployments"
        intro="Hands-on DevOps projects demonstrating CI/CD automation, Docker containerization, Kubernetes orchestration, AWS cloud infrastructure, infrastructure as code, and monitoring solutions for scalable and reliable application delivery."
      />

      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            className="project-card interactive-card"
            key={project.title}
            data-reveal="card"
            style={{ '--delay': `${index * 0.1}s` }}
          >
            <div className="project-preview">
              <div className="project-preview-bar">
                <span />
                <span />
                <span />
              </div>

              <div className="project-preview-body">
                <strong>{project.preview}</strong>
                <p>{project.title}</p>
              </div>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <ul className="detail-list">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            {project.link ? (
              <a
                className="text-link interactive-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkLabel}
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;