import { ArrowUpRight, Ticket, AddressBook, Globe, Gear, Stack, User } from '@/components/slab'

type Experience = {
  period: string
  company: string
  role: string
  summary: string
  tags: string[]
  Icon: typeof Ticket
}

const EXPERIENCE: Experience[] = [
  {
    period: '2026–Present',
    company: 'Homeaglow',
    role: 'Email & Chat Support Specialist',
    summary: 'Manage high-volume email and chat inquiries, investigate support tickets, review account details, and provide accurate resolutions for scheduling, payments, cancellations, and job-related concerns.',
    tags: ['Email Support', 'Chat Support', 'Ticket Resolution', 'Documentation'],
    Icon: Ticket,
  },
  {
    period: '2025–2026',
    company: 'Real Estate Properties',
    role: 'Appointment Setter & Social Media Manager',
    summary: 'Handled property inquiries, client follow-ups, appointment scheduling, social media listings, and lead engagement for prospective property buyers.',
    tags: ['Real Estate', 'Lead Follow-up', 'Appointment Setting', 'Social Media'],
    Icon: AddressBook,
  },
  {
    period: '2022–2025',
    company: 'Genpact Services LLC',
    role: 'Process Associate – Life Insurance & Healthcare',
    summary: 'Assisted customers with insurance, healthcare, account, and service-related inquiries while maintaining accurate records and documentation.',
    tags: ['Customer Support', 'Documentation', 'Healthcare', 'Insurance'],
    Icon: User,
  },
  {
    period: '2020–2022',
    company: 'Kreativ Monarch Digital Prints',
    role: 'Social Media Manager & E-commerce Product Listing Specialist',
    summary: 'Managed social media content and customer inquiries while creating and maintaining product listings, pricing, descriptions, images, and order details.',
    tags: ['Social Media', 'E-commerce', 'Product Listing', 'Customer Support'],
    Icon: Globe,
  },
  {
    period: '2020',
    company: 'Concentrix',
    role: 'Technical Support Representative',
    summary: 'Resolved connectivity, device, and service concerns through remote troubleshooting while documenting account updates and resolutions.',
    tags: ['Technical Support', 'Troubleshooting', 'Documentation'],
    Icon: Gear,
  },
  {
    period: '2018–2020',
    company: 'VXI Global',
    role: 'Sales Consultant III / Subject Matter Expert',
    summary: 'Supported customer product and account concerns while assisting team members with process questions, product knowledge, and complex cases.',
    tags: ['Sales Support', 'SME Support', 'Customer Service'],
    Icon: Stack,
  },
  {
    period: '2014–2017',
    company: 'ePerformax',
    role: 'Team Leader',
    summary: 'Monitored team performance, productivity, and quality; prepared reports, coached team members, handled escalations, and supported daily operations.',
    tags: ['Leadership', 'Reporting', 'Coaching', 'Escalations'],
    Icon: User,
  },
]

export default function ProjectsGrid() {
  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Experience</span>
        <h1 className="pgrid__title" id="projects-title">Experience built around people, process, and support.</h1>
        <p className="pgrid__lede">
          A background spanning customer support, real estate, sales, social media, e-commerce, technical support, and team leadership.
        </p>
      </header>

      <div className="home__glass pgrid__glass">
        <div className="bento bento--projects">
          {EXPERIENCE.map((item) => (
            <article key={`${item.company}-${item.role}`} className="bento__card">
              <span className="bento__head">
                <span className="bento__label">
                  <span className="bento__icon">
                    <item.Icon size={20} weight="duotone" aria-hidden="true" />
                  </span>
                  <span className="bento__title">{item.company}</span>
                </span>
                <span className="bento__desc">{item.role}</span>
              </span>
              <div className="bento__media" style={{ padding: '1rem', display: 'grid', gap: '.7rem' }}>
                <span className="sgrid__chip">{item.period}</span>
                <p style={{ margin: 0, lineHeight: 1.5 }}>{item.summary}</p>
                <ul className="sgrid__stage-chips" role="list" aria-label={`${item.company} skills`}>
                  {item.tags.map((tag) => <li key={tag} className="sgrid__stage-chip">{tag}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
