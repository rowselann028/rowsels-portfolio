const services = [
  {
    title: 'Email, Chat & Ticket Support',
    text: 'Responding to inquiries, resolving support tickets, documenting cases, and keeping communication clear and professional.',
  },
  {
    title: 'Administrative Support',
    text: 'Inbox organization, documentation, data entry, file management, scheduling, and day-to-day coordination.',
  },
  {
    title: 'Real Estate Support',
    text: 'Property inquiries, lead follow-ups, appointment setting, listing support, and client communication.',
  },
  {
    title: 'Social Media Support',
    text: 'Business page management, responding to messages, posting listings or updates, and customer engagement.',
  },
  {
    title: 'E-commerce Support',
    text: 'Product listing, catalog updates, pricing and product details, and basic customer or order support.',
  },
]

const experience = [
  {
    company: 'Homeaglow',
    role: 'Email & Chat Support Specialist',
    period: '2026–Present',
    text: 'Manage high-volume email and chat inquiries, investigate support tickets, review account details, and provide accurate resolutions for scheduling, payments, cancellations, and job-related concerns.',
  },
  {
    company: 'Real Estate Properties',
    role: 'Appointment Setter & Social Media Manager',
    period: '2025–2026',
    text: 'Handled property inquiries, client follow-ups, appointment scheduling, social media listings, and lead engagement for prospective property buyers.',
  },
  {
    company: 'Genpact Services LLC',
    role: 'Process Associate – Life Insurance & Healthcare',
    period: '2022–2025',
    text: 'Assisted customers with insurance, healthcare, account, and service-related inquiries while maintaining accurate records and documentation.',
  },
  {
    company: 'Kreativ Monarch Digital Prints',
    role: 'Social Media Manager & E-commerce Product Listing Specialist',
    period: '2020–2022',
    text: 'Managed social media content and customer inquiries while creating and maintaining product listings, pricing, descriptions, images, and order details.',
  },
  {
    company: 'Concentrix',
    role: 'Technical Support Representative',
    period: '2020',
    text: 'Resolved connectivity, device, and service concerns through remote troubleshooting while documenting account updates and resolutions.',
  },
  {
    company: 'VXI Global',
    role: 'Sales Consultant III / Subject Matter Expert',
    period: '2018–2020',
    text: 'Supported customer product and account concerns while assisting team members with process questions, product knowledge, and complex cases.',
  },
  {
    company: 'ePerformax',
    role: 'Team Leader',
    period: '2014–2017',
    text: 'Monitored team performance, productivity, and quality; prepared reports, coached team members, handled escalations, and supported daily operations.',
  },
]

const tools = [
  'Google Workspace',
  'Microsoft 365',
  'Salesforce',
  'Close CRM',
  'GoHighLevel (GHL)',
  'Zendesk',
  'Citrix',
  'Amazon WorkSpaces',
  'Slack',
  'Zoom',
  'Notion',
  'Meta Business Suite',
  'Canva',
  'CapCut',
  'ChatGPT',
  'Claude',
]

export default function App() {
  return (
    <div className="site">
      <header className="topbar">
        <a className="brand" href="#home">Rowsel Ann</a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#tools">Tools</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow">Virtual Assistant · Customer Support · Operations</span>
            <h1>Reliable support that keeps your business moving.</h1>
            <p>
              I help businesses stay organized, responsive, and connected through customer support,
              real estate assistance, administrative support, social media, and e-commerce tasks.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="mailto:rowselann028@gmail.com">Let’s work together</a>
              <a className="button secondary" href="#experience">View experience</a>
            </div>
            <div className="quick-facts">
              <span><strong>9+ years</strong> customer service experience</span>
              <span><strong>Remote-ready</strong> Philippines · GMT+8</span>
            </div>
          </div>
          <div className="hero-photo">
            <img src="/rowsel-headshot.webp" alt="Professional portrait of Rowsel Ann" />
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-label">About Me</div>
          <div className="about-grid">
            <h2>Versatile support across people, processes, and platforms.</h2>
            <p>
              I’m a Virtual Assistant with 9+ years of experience supporting customers, teams, and businesses
              across real estate, healthcare, telecommunications, e-commerce, and remote operations. I’m comfortable
              handling customer inquiries, tickets, follow-ups, scheduling, documentation, social media, and product listings.
              I adapt quickly to new workflows and take pride in being organized, dependable, and easy to work with.
            </p>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-label">Services</div>
          <h2>How I can support your business</h2>
          <div className="cards">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-label">Experience</div>
          <h2>Professional background</h2>
          <div className="timeline">
            {experience.map((item) => (
              <article className="job" key={`${item.company}-${item.role}`}>
                <div className="job-meta">
                  <span className="period">{item.period}</span>
                  <h3>{item.company}</h3>
                  <p className="role">{item.role}</p>
                </div>
                <p className="job-text">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="tools">
          <div className="section-label">Tools</div>
          <h2>Platforms I work with</h2>
          <div className="tool-list">
            {tools.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <div className="section-label">Contact</div>
            <h2>Need dependable remote support?</h2>
            <p>
              Tell me about the role, schedule, tasks, and tools you use. I’d be happy to discuss how I can support your business.
            </p>
          </div>
          <a className="button primary" href="mailto:rowselann028@gmail.com">rowselann028@gmail.com</a>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Rowsel Ann</span>
        <span>Virtual Assistant Portfolio</span>
      </footer>
    </div>
  )
}
