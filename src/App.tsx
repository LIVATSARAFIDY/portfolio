
import { useState } from 'react'
import './App.css'

const email = 'vahatra@gmail.com'

const copy = {
  fr: {
    nav: ['À propos', 'Compétences', 'Projets', 'Expérience', 'Contact'],
    status: 'Disponible pour de nouvelles missions',
    kicker: 'Développeur Fullstack JS',
    title: 'Je construis des systèmes web solides.',
    intro: "Spécialisé backend, j'aime transformer des idées complexes en produits simples, rapides et durables.",
    cta: 'Voir mes projets',
    secondary: 'Me contacter',
    about: 'À propos',
    aboutText: "Développeur fullstack avec 5 ans d'expérience, je travaille à l'intersection du produit, de la donnée et du code. Je privilégie les architectures lisibles, les APIs bien pensées et les interfaces qui vont droit au but.",
    skills: 'Compétences',
    projects: 'Side projects',
    experience: 'Expérience',
    contact: 'Contact',
    contactText: 'Un projet à construire, une API à fiabiliser ou simplement envie de parler code ?',
    send: 'Envoyer un email',
  },
  en: {
    nav: ['About', 'Skills', 'Projects', 'Experience', 'Contact'],
    status: 'Available for new missions',
    kicker: 'Fullstack JS Developer',
    title: 'I build resilient web systems.',
    intro: 'Backend-minded, I turn complex ideas into simple, fast and durable products.',
    cta: 'View my projects',
    secondary: 'Get in touch',
    about: 'About',
    aboutText: 'Fullstack developer with 5 years of experience, working at the intersection of product, data and code. I value readable architectures, thoughtful APIs and interfaces that get straight to the point.',
    skills: 'Skills',
    projects: 'Side projects',
    experience: 'Experience',
    contact: 'Contact',
    contactText: 'A product to build, an API to harden, or simply want to talk code?',
    send: 'Send an email',
  },
}

const projectData = [
  {
    name: 'dead-exports',
    type: 'CLI', command: 'dead-exports ./fixture/direct-import/tsconfig.json',
    description: {
      fr: 'Détecte les exports TypeScript potentiellement inutilisés grâce à l\'analyse statique.',
      en: 'Detects potentially unused TypeScript exports using static analysis.'
    },
    stack: 'TypeScript · Ts-morph',
    accent: '01',
    github: 'https://github.com/LIVATSARAFIDY/dead-exports-cli'
  },
  {
    name: 'env-doctor',
    type: 'CLI', command: 'env-doctor compare --target <file> --reference <file>', description: { fr: 'Synchronisez et validez les fichiers .env en équipe.', en: 'Synchronize and validate .env files as a team' }, stack: 'TypeScript · CLI · Configuration', accent: '02', github: 'https://github.com/LIVATSARAFIDY/doctor-env'
  },
  {
    name: 'commitlens',
    type: 'CLI',
    command: 'commitlens analyze',
    description: {
      fr: 'Analyseur intelligent de commits Git et assistant pour la norme Conventional Commits',
      en: 'Intelligent Git commit analyzer and Conventional Commits assistant'
    },
    stack: 'TypeScript · GIT CLI · Ollama', accent: '03',
    github: 'https://github.com/LIVATSARAFIDY/commitlens.git'
  },
]

const experienceData = [
  { role: 'Intern', description: { fr: 'Découverte du développement professionnel.', en: 'Discovering professional software development.' } },
  { role: 'Junior Full-Stack Developer', description: { fr: 'Développement de fonctionnalités frontend et backend.', en: 'Building frontend and backend features.' } },
  { role: 'Confirmed Developer and Project Lead', description: { fr: 'Responsabilités techniques et gestion de projet sous la supervision du CTO.', en: 'Technical ownership and project management under the supervision of the CTO.' } },
  { role: 'Technical and Team Coordination', description: { fr: 'Relation client, coordination d’équipe et infrastructure de production.', en: 'Client relations, team coordination and production infrastructure.' } },
]

const skillData = [
  { title: { fr: 'Frontend', en: 'Frontend' }, items: ['HTML5 / CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Angular', 'Tailwind CSS'] },
  { title: { fr: 'Backend', en: 'Backend' }, items: ['Node.js / Express', 'PHP (Laravel)', 'REST API', 'Authentification (JWT, OAuth)'] },
  { title: { fr: 'Bases de données', en: 'Databases' }, items: ['PostgreSQL', 'MySQL', 'Firebase', 'Prisma / Sequelize / TypeORM'] },
  { title: { fr: 'DevOps & Cloud', en: 'DevOps & Cloud' }, items: ['Git / GitHub / GitLab', 'Docker', 'CI/CD (GitLab CI)', 'Linux / Bash', 'Nginx'] },
]


function App() {

  const [lang, setLang] = useState<'fr' | 'en'>('fr')
  const t = copy[lang]

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Home">[ m.d ]</a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {t.nav.map((item, index) => <a href={`#${['about', 'skills', 'projects', 'experience', 'contact'][index]}`} key={item}>{item}</a>)}
        </nav>
        <div className="top-actions">
          <span className="availability"><i /> {t.status}</span>
          <div className="lang-toggle" role="group" aria-label="Language selector">
            <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')} aria-pressed={lang === 'fr'}>FR</button>
            <span>/</span>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>$</span> whoami</p>
          <p className="kicker">{t.kicker}</p>
          <h1>{t.title}</h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">{t.cta} <span>↘</span></a><a className="text-link" href="#contact">{t.secondary} <span>↗</span></a></div>
        </div>
        <div className="terminal-card" aria-label="Terminal introduction">
          <div className="terminal-head"><span>~/portfolio/about.txt</span><span>● ● ●</span></div>
          <div className="terminal-body"><p><span className="muted">01</span> const developer = {'{'}</p><p><span className="muted">02</span> &nbsp; name: <b>&quot;LIVATSARAFIDY Pierre T.&quot;</b>,</p><p><span className="muted">03</span> &nbsp; focus: <b>&quot;backend systems&quot;</b>,</p><p><span className="muted">04</span> &nbsp; experience: <b>5</b>,</p><p><span className="muted">05</span> &nbsp; status: <b className="green">&quot;building&quot;</b></p><p><span className="muted">06</span> {'}'}</p><p className="terminal-prompt">$ <span className="cursor">_</span></p></div>
        </div>
      </section>

      <div className="rule"><span>01</span><span>ABOUT / PROFILE</span><span>+</span></div>
      <section className="section about-grid" id="about"><div className="section-label"><span>{t.about}</span><small>/profile</small></div><div><p className="section-lead">{t.aboutText}</p><p className="body-copy">{lang === 'fr' ? 'Du premier schéma de données au dernier déploiement, je reste attentif aux détails qui rendent un produit fiable.' : 'From the first data model to the last deployment, I care about the details that make a product dependable.'}</p></div></section>

      <div className="rule"><span>02</span><span>STACK / TOOLBOX</span><span>+</span></div>
      <section className="section" id="skills"><div className="section-heading">
        <div className="section-label">
          <span>{t.skills}</span>
          <small>/toolbox</small>
        </div>
        <span className="section-index">
          21 technologies
        </span>
      </div>
        <div className="skills-grid">
          {skillData.map((group) => (
            <div className="skill-group" key={group.title.fr}>
              <h3>{group.title[lang]}</h3>
              <p>{group.items.join(' · ')}</p>
              <span className="skill-mark">+</span>
            </div>
          ))}
        </div>
      </section>

      <div className="rule"><span>03</span><span>SELECTED / SIDE PROJECTS</span><span>+</span></div>
      <section className="section" id="projects">
        <div className="section-heading">
          <div className="section-label">
            <span>{t.projects}</span>
            <small>/lab</small>
          </div>
          <span className="section-index">03 experiments</span>
        </div>
        <div className="projects-grid">
          {projectData.map((project) => <article className="project-card" key={project.name}><div className="project-visual"><span>/{project.accent}</span><div className="project-command"><span className="prompt">$</span><code>{project.command}</code></div><em>↗</em></div><div className="project-meta"><span>{project.type}</span><span>{project.stack}</span></div><h3>{project.name}</h3><p>{project.description[lang]}</p>{project.github && <div className="project-links"><a href={project.github} target="_blank" rel="noreferrer">github ↗</a></div>}</article>)}</div></section>

      <div className="rule"><span>04</span><span>WORK / HISTORY</span><span>+</span></div>
      <section className="section" id="experience">
        <div className="section-heading">
          <div className="section-label"><span>{t.experience}</span><small>/timeline</small></div>
          <span className="section-index">04 steps</span>
        </div>
        <div className="timeline">
          {experienceData.map((step, index) => (
            <div className="timeline-row" key={step.role}>
              <span className="year">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.role}</h3>
                <p>{step.description[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-panel" id="contact"><div><p className="eyebrow"><span>›</span> contact.init()</p><h2>{t.contactText}</h2></div><div className="contact-action"><a className="button button-primary" href={`mailto:${email}`}>{t.send} <span>↗</span></a><a className="contact-email" href={`mailto:${email}`}>{email}</a></div></section>
      <footer><span>© 2026 LIVATSARAFIDY Pierre T.</span><span>Built with intention / Antananarivo</span><a href="#top">back to top ↑</a></footer>
    </main>
  )

}

export default App
