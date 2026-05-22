import SectionHeading from './SectionHeading';

function AboutSection() {
    return (
        <section className="content-card" id="about">
            <SectionHeading
                label="Discover My Journey"
                eyebrow="About Me."
                title="Automation Engineer"
                intro="Driven by automation, powered by cloud technologies, focused on delivering scalable solutions"
            />
            <div className="about-grid">
                <div className="about-copy" data-reveal="about-copy">
                    <p>
                        Results-driven DevOps Engineer with hands-on experience in AWS, Docker, Jenkins, Terraform, Kubernetes, and Linux administration.
                        Specialized in building scalable cloud infrastructure, automating CI/CD pipelines, and streamlining deployment workflows for
                        modern applications. Experienced in infrastructure provisioning, containerized application deployment, cloud monitoring, and
                        implementing reliable automation solutions to improve system performance and operational efficiency.
                    </p>
                    <p>
                        Passionate about cloud-native technologies, infrastructure automation, and delivering highly available production environments.
                        Adept at managing end-to-end deployment pipelines, optimizing application reliability, and integrating monitoring solutions using
                        Prometheus, Grafana, and AWS CloudWatch. Known for combining strong problem-solving skills with scalable DevOps practices to build
                        secure, efficient, and maintainable systems.
                    </p>
                    <a
                        className="text-link interactive-link"
                        href="/Poovarasan_Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;