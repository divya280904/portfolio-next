const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'UI/UX Design',
  'Responsive Design',
  'REST APIs',
  'Agile Workflow',
  'Git & GitHub',
  'Problem Solving',
  'Team Collaboration'
];

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Bright Studio',
    period: '2022 — Present',
    description:
      'Designing and building user-focused interfaces, improving conversion rates, and collaborating closely with product teams to turn ideas into polished digital experiences.'
  },
  {
    role: 'Web Designer',
    company: 'North Peak Media',
    period: '2020 — 2022',
    description:
      'Created marketing websites, landing pages, and dashboards that balanced performance, accessibility, and visual storytelling for brand-focused clients.'
  },
  {
    role: 'Junior Developer',
    company: 'Launch Lab',
    period: '2018 — 2020',
    description:
      'Supported front-end implementation, maintained code quality, and contributed to product improvements across a range of client projects.'
  }
];

const projects = [
  {
    title: 'Portfolio Analytics Dashboard',
    type: 'Product Design',
    description:
      'Built a responsive analytics dashboard for creators to monitor engagement, conversions, and campaign performance in one place.'
  },
  {
    title: 'Travel Planner App',
    type: 'Mobile-first Web App',
    description:
      'Developed a trip-planning application with itinerary management, location insights, and smooth interactions for mobile and desktop users.'
  },
  {
    title: 'E-commerce Redesign',
    type: 'UX/UI Refresh',
    description:
      'Transformed a dated storefront into a modern shopping experience with cleaner navigation, better content hierarchy, and stronger conversion paths.'
  }
];

const education = [
  {
    degree: 'B.Sc. in Computer Science',
    school: 'University of Technology',
    period: '2014 — 2018',
    detail: 'Focused on software engineering, user experience, and web application development.'
  },
  {
    degree: 'Certificate in Frontend Development',
    school: 'Creative Coding Academy',
    period: '2019',
    detail: 'Completed intensive coursework covering modern JavaScript, responsive UI, and product design workflows.'
  }
];

const contactLinks = [
  { label: 'Email', value: 'hello@yourname.dev', href: 'mailto:hello@yourname.dev' },
  { label: 'LinkedIn', value: 'linkedin.com/in/yourname', href: 'https://linkedin.com' },
  { label: 'GitHub', value: 'github.com/yourname', href: 'https://github.com' },
  { label: 'Location', value: 'New York, NY', href: '#' }
];

export default function HomePage() {
  return (
    <main>
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">DIVYA GUPTA</div>
          <nav className="nav" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Developer • Designer • Problem Solver</p>
            <h1>I build thoughtful digital experiences.</h1>
            <p className="lead">
              I’m Your Name, a frontend developer focused on creating clean, responsive,
              and user-centered experiences that blend design and technology.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="#projects">View Projects</a>
              <a className="btn btn-secondary" href="#contact">Let’s Talk</a>
            </div>

            <div className="stat-row">
              <div className="stat">
                <strong>6+</strong>
                <span>Years Experience</span>
              </div>
              <div className="stat">
                <strong>25+</strong>
                <span>Projects Delivered</span>
              </div>
              <div className="stat">
                <strong>100%</strong>
                <span>Client Focus</span>
              </div>
            </div>
          </div>

          <div className="profile-panel">
            <div className="profile-visual" aria-label="Profile illustration placeholder">
              <div className="profile-badge">Available for work</div>
              <div className="profile-card">
                <strong>Product-minded developer</strong>
                <p>
                  Crafting interfaces that are responsive, accessible, and built to make
                  real business impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">About Me</p>
            <h2>Turning ideas into seamless experiences.</h2>
          </div>

          <div className="grid two-col">
            <div className="card">
              <p>
                I am a frontend developer and digital designer with a strong interest in
                building intuitive interfaces that feel effortless for users. My work blends
                engineering precision with visual clarity to create solutions that are not
                only beautiful, but practical and performant.
              </p>
              <p>
                I enjoy collaborating with teams, understanding user needs, and translating
                them into experiences that are responsive, accessible, and scalable across
                devices and platforms.
              </p>
            </div>

            <div className="card">
              <p>
                My process combines research, prototyping, UI design, and implementation.
                I care deeply about details, maintainability, and crafting experiences that
                leave a lasting impression without compromising usability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Skills</p>
            <h2>Tools and strengths</h2>
          </div>

          <div className="card">
            <ul className="skill-list" aria-label="Skills list">
              {skills.map((skill) => (
                <li key={skill} className="skill-pill">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Experience</p>
            <h2>Career highlights</h2>
          </div>

          <div className="card">
            <ul className="experience-list">
              {experiences.map((item) => (
                <li key={`${item.role}-${item.company}`}>
                  <div className="meta">{item.period}</div>
                  <h3>{item.role}</h3>
                  <p><strong>{item.company}</strong></p>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Projects</p>
            <h2>Selected work</h2>
          </div>

          <div className="grid three-col">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="tag">{project.type}</span>
                </div>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Education</p>
            <h2>Academic background</h2>
          </div>

          <div className="card">
            <ul className="education-list">
              {education.map((item) => (
                <li key={`${item.degree}-${item.school}`}>
                  <div className="meta">{item.period}</div>
                  <h3>{item.degree}</h3>
                  <p><strong>{item.school}</strong></p>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something meaningful.</h2>
          </div>

          <div className="card">
            <ul className="contact-list">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <div className="contact-row">
                    <strong>{link.label}</strong>
                    <a href={link.href}>{link.value}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">© 2026 Your Name. Built with Next.js.</div>
      </footer>
    </main>
  );
}
