export const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
];

export const MyContent = {
    lead: 'Automation Engineer',
    title: ['DevOps Engineer', 'Cloud & CI/CD Specialist'],
    summary:
        'DevOps Engineer with hands-on experience in AWS, Docker, Jenkins, Terraform, CI/CD pipelines, Kubernetes, and Linux administration. Focused on automating deployments, improving infrastructure reliability, and building scalable cloud-native systems.',
    primaryAction: { label: 'Contact Me', href: '#contact' },
    secondaryAction: { label: 'My Projects', href: '#projects' },
};

export const aboutProfile = [
    { label: 'Name', value: 'Poovarasan A' },
    { label: 'Email', value: 'apoovarasan.vnb@gmail.com' },
    { label: 'Phone', value: '6383626411' },
    { label: 'Location', value: 'Madurai, India' },
];

export const MyStats = [
    {
        label: 'Experience',
        value: '3+ Years',
        description: 'DevOps Engineer with hands-on experience in AWS, Docker, Jenkins, Terraform, CI/CD pipelines, Kubernetes, and Linux administration. Skilled in automating deployments, infrastructure provisioning, monitoring, and cloud-native application deployment. Passionate about improving deployment efficiency, scalability, and system reliability.',
    },
    {
        label: 'Core Stack',
        value: 'Devops Mindset',
        description: 'AWS (EC2, IAM, ELB, VPC, S3, EBS, EFS, RDS, DynamoDB, Route53), Docker, Git & GitHub, Jenkins, Terraform, Kubernetes, Ansible,Jenkins Pipelines, AWS CodeCommit, CodeDeploy, CodeBuild, CodePipeline, Prometheus, Grafana, CloudWatch, Windows Server, Linux, Networking Basics.',
    },
    {
        label: 'Current Role',
        value: 'Automation Engineer',
        description: 'HCL Technologies.',
    },
];

export const services = [
    {
        icon: '☁️',
        title: 'Cloud Infrastructure',
        description:
            'Working with AWS services like EC2, S3, VPC, IAM, RDS, and Route53 for scalable deployments.',
    },
    {
        icon: '⚙️',
        title: 'CI/CD Automation',
        description:
            'Building CI/CD pipelines using Jenkins and AWS DevOps tools to automate build and deployment workflows.',
    },
    {
        icon: '🐳',
        title: 'Containerization & Orchestration',
        description:
            'Using Docker and Kubernetes (EKS) for deploying and managing cloud-native applications.',
    },
];

export const processSteps = [
    {
        icon: '01',
        title: 'Plan & Structure',
        description:
            'Understanding requirements, designing scalable architecture, and planning workflows for deployment.',
    },
    {
        icon: '02',
        title: 'Build & Automate',
        description:
            'Implementing CI/CD pipelines, developing infrastructure using Terraform, and containerizing applications using Docker.',
    },
    {
        icon: '03',
        title: 'Deploy & Monitor',
        description:
            'Deploying applications on AWS, managing Kubernetes clusters, and monitoring systems using Prometheus and CloudWatch.',
    },
];

export const skillGroups = [
    {
        title: 'Cloud Platforms',
        items: [
            {
                name: 'AWS (EC2, IAM, ELB, VPC, S3, RDS, DynamoDB, Route53)',
                accent: '#ff9900',
                glyph: 'AWS',
                iconSrc:
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
            },
        ],
    },

    {
        title: 'DevOps Tools',
        items: [
            {
                name: 'Docker',
                accent: '#0db7ed',
                glyph: 'DK',
                iconSrc:
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
            },
            {
                name: 'Git & GitHub',
                accent: '#24292e',
                glyph: 'GH',
                iconSrc:
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            },
            {
                name: 'Jenkins',
                accent: '#d33833',
                glyph: 'JK',
                iconSrc:
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
            },
            {
                name: 'Terraform',
                accent: '#7B42BC',
                glyph: 'TF',
                iconSrc:
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
            },
            {
                name: 'Kubernetes',
                accent: '#326ce5',
                glyph: 'K8s',
                iconSrc:
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
            },
            {
                name: 'Ansible',
                accent: '#EE0000',
                glyph: 'AN',
                iconSrc:
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg',
            },
        ],
    },

    {
        title: 'CI/CD',
        items: [
            {
                name: 'Jenkins Pipelines',
                accent: '#d33833',
                glyph: 'CI',
                iconSrc:
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
            },
            {
                name: 'AWS CodeCommit',
                accent: '#ff9900',
                glyph: 'CC',
            },
            {
                name: 'AWS CodeBuild',
                accent: '#ff9900',
                glyph: 'CB',
            },
            {
                name: 'AWS CodeDeploy',
                accent: '#ff9900',
                glyph: 'CD',
            },
            {
                name: 'AWS CodePipeline',
                accent: '#ff9900',
                glyph: 'CP',
            },
        ],
    },

    {
        title: 'Monitoring & Logging',
        items: [
            {
                name: 'Prometheus',
                accent: '#e6522c',
                glyph: 'PR',
                iconSrc:
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg',
            },
            {
                name: 'Grafana',
                accent: '#f46800',
                glyph: 'GF',
                iconSrc:
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
            },
            {
                name: 'CloudWatch',
                accent: '#ff4f8b',
                glyph: 'CW',
            },
        ],
    },

    {
        title: 'Operating Systems & Networking',
        items: [
            {
                name: 'Linux Administration',
                accent: '#f0db4f',
                glyph: 'LX',
                iconSrc:
                    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
            },
            {
                name: 'Windows Server',
                accent: '#00a4ef',
                glyph: 'WS',
            },
            {
                name: 'Networking Basics',
                accent: '#4caf50',
                glyph: 'NW',
            },
        ],
    },
];

export const projects = [
    {
        title: 'React E-commerce Application',
        preview: 'E-commerce',
        description:
            'Production-ready React application deployed using AWS and Docker.',
        highlights: [
            'Built and deployed using AWS EC2, Docker, and Docker Compose.',
            'Implemented CI/CD pipeline using Jenkins and GitHub.',
            'Automated deployment using shell scripts and branch strategy.',
            'Configured secure AWS infrastructure with restricted access.',
        ],
    },
    {
        title: 'MindTrack Application',
        preview: 'Tracking System',
        description:
            'Cloud-native application deployed using Kubernetes and AWS.',
        highlights: [
            'Built using Docker and Kubernetes (EKS).',
            'Implemented CI/CD using GitHub, AWS CodeBuild, and CodePipeline.',
            'Configured LoadBalancer and Kubernetes YAML manifests.',
            'Integrated AWS ECR and CloudWatch logging.',
        ],
    },
];

export const achievements = [
    'Recognized for contributing to CI/CD automation using Jenkins, Git, and Docker to streamline application build and deployment processes.',
    'Appreciated for managing AWS cloud infrastructure and supporting automated provisioning using Terraform for scalable deployments.',
    'Acknowledged for building and maintaining Docker-based deployments and supporting reliable application delivery across environments.',
    'Recognized for effective incident handling, troubleshooting, and ensuring smooth system operations in production environments.',
];


export const experience = {

    role: 'Automation Engineer',
    period: 'Feb 2025 - Present',
    company: 'HCL Technologies, Madurai',
    highlights: [
        'Worked on CI/CD automation using Jenkins, Git, and Docker to streamline application build and deployment processes in Linux environments.',
        'Managed AWS cloud infrastructure and automated resource provisioning using Terraform.',
        'Built and maintained Docker images for Java/React applications and deployed them on Linux servers.',
        'Automated deployment workflows to improve release efficiency across environments.',
        'Monitored deployments and resolved infrastructure issues with development teams.',
    ],
};

export const experience2 = {

    role: 'Command Centre Engineer',
    period: 'Oct 2022 - Jan 2025',
    company: 'HCL Technologies, Madurai',
    highlights: [
        'Supported L1 activities for Windows, Linux, Networking and monitored systems for smooth operations.',
        'Acted as first point of contact for operational issues.',
        'Handled alerts, incidents, and first-level troubleshooting.',
        'Managed SLA compliance and alert suppression during downtime.',
    ],
};



// export const experience = [
//     {
//         role: 'Automation Engineer',
//         period: 'Feb 2025 - Present',
//         company: 'HCL Technologies, Madurai',
//         highlights: [
//             'Worked on CI/CD automation using Jenkins, Git, and Docker to streamline application build and deployment processes in Linux environments.',
//             'Managed AWS cloud infrastructure and automated resource provisioning using Terraform.',
//             'Built and maintained Docker images for Java/React applications and deployed them on Linux servers.',
//             'Automated deployment workflows to improve release efficiency across environments.',
//             'Monitored deployments and resolved infrastructure issues with development teams.',
//         ],
//     },
//     {
//         role: 'Command Centre Engineer',
//         period: 'Oct 2022 – Jan 2025',
//         company: 'HCL Technologies',
//         highlights: [
//             'Supported L1 activities for Windows, Linux, Networking and monitored systems for smooth operations.',
//             'Acted as first point of contact for operational issues.',
//             'Handled alerts, incidents, and first-level troubleshooting.',
//             'Managed SLA compliance and alert suppression during downtime.',
//         ],
//     },
// ];


export const education = {
    degree: 'Bachelor of Engineering (B.E.)',
    college: 'PSG College of Technology, Coimbatore',
    period: 'Aug 2018 - May 2022',
};


export const contactLinks = [
    { label: 'apoovarasan.vnb@gmail.com', href: 'mailto:apoovarasan.vnb@gmail.com' },
    { label: '+91 6383626411', href: 'tel:+916383626411' },
    {
        label: 'GitHub',
        href: 'https://github.com/Poovarasan-23',
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/poovarasan-a-b139a5219',
    },
];

export const contactDetails = [
    {
        index: '01',
        title: 'Email',
        label: 'apoovarasan.vnb@gmail.com',
        href: 'mailto:apoovarasan.vnb@gmail.com',
    },
    {
        index: '02',
        title: 'Phone',
        label: '6383626411',
        href: 'tel:+916383626411',
    },
    {
        index: '03',
        title: 'LinkedIn',
        label: 'linkedin.com/in/poovarasan-a',
        href: 'https://linkedin.com/in/poovarasan-a-b139a5219',
    },
    {
        index: '04',
        title: 'GitHub',
        label: 'Poovarasan-23',
        href: 'https://github.com/Poovarasan-23',
    },
];

export const socialLinks = [
    { label: 'GitHub', short: 'gh', href: 'https://github.com/Poovarasan-23' },
    { label: 'Mail', short: '@', href: 'mailto:apoovarasan.vnb@gmail.com' },
    { label: 'LinkedIn', short: 'in', href: 'https://linkedin.com/in/poovarasan-a-b139a5219' },
];

export const footerGroups = [
    {
        title: 'Discover',
        links: [
            { label: 'Home', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Services', href: '#services' },
        ],
    },
    {
        title: 'Expertise',
        links: [
            { label: 'Process', href: '#process' },
            { label: 'Skills', href: '#skills' },
            { label: 'Projects', href: '#projects' },
        ],
    },
    {
        title: 'Journey',
        links: [
            { label: 'Experience', href: '#experience' },
            { label: 'Education', href: '#education' },
            { label: 'Contact', href: '#contact' },
        ],
    },
];