import { achievements, education } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

function AchievementsEducationSection() {
  return (
    <section className="content-card split-card" id="education">
      <div data-reveal="column">
        <SectionHeading
          label="Professional Impact"
          eyebrow="Key Achievements."
          title="Driving reliability, automation, and scalable system operations in DevOps environments"
        />

        <ul className="detail-list">
          {achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </div>

      <div data-reveal="column">
        <SectionHeading
          label="Academic Background"
          eyebrow="Education."
          title="Engineering Graduated"
        />

        <div className="education-card interactive-card" data-reveal="card">
          <h3>{education.degree}</h3>
          <p>{education.college}</p>
          <span>{education.period}</span>
          <strong>{education.cgpa}</strong>
        </div>
      </div>
    </section>
  );
}

export default AchievementsEducationSection;