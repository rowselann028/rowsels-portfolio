import type React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, FolderOpen, User, Stack, Gear, EnvelopeSimple } from '@/components/slab'

const SERVICES = [
  'Email & chat support',
  'Administrative support',
  'Real estate support',
  'Social media support',
  'E-commerce support',
]

const TOOLS = [
  'Google Workspace',
  'Microsoft 365',
  'Salesforce',
  'GoHighLevel',
  'Zendesk',
  'Notion',
  'Meta Business Suite',
  'Canva',
  'ChatGPT',
  'Claude',
]

function CardHead({ Icon, title, desc }: { Icon: typeof FolderOpen; title: string; desc: string }) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon"><Icon size={20} weight="fill" aria-hidden="true" /></span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  return (
    <nav className="bento" aria-label="Explore the portfolio">
      <Link to="/projects" className="bento__card bento__card--projects">
        <CardHead Icon={FolderOpen} title="Experience" desc="9+ years across customer support, real estate, sales, e-commerce, and operations." />
        <div className="bento__media" style={{ padding: '1rem', display: 'grid', gap: '.55rem' }}>
          {['Homeaglow · Email & Chat Support', 'Real Estate · Appointment Setting', 'Genpact · Insurance & Healthcare', 'ePerformax · Team Leadership'].map((item, i) => (
            <span key={item} className="bento__chip" style={{ '--i': i } as React.CSSProperties}>{item}</span>
          ))}
        </div>
      </Link>

      <Link to="/services" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="Services" desc="Flexible virtual assistance built around your workflow and priorities." />
        <ul className="bento__media bento__offers" role="list">
          {SERVICES.map((title, i) => (
            <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
              <span className="bento__offer-tile"><Gear size={15} weight="duotone" aria-hidden="true" /></span>
              <span className="bento__offer-text"><span className="bento__offer-title">{title}</span></span>
              <span className="bento__offer-num" aria-hidden="true">0{i + 1}</span>
            </li>
          ))}
        </ul>
      </Link>

      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About" desc="Reliable, adaptable, detail-oriented support for busy teams and business owners." />
        <div className="bento__media" style={{ padding: '1rem', lineHeight: 1.55 }}>
          Customer support, client communication, lead follow-up, documentation, social media, and online business support — handled with clear communication and dependable follow-through.
        </div>
      </Link>

      <Link to="/about" className="bento__card bento__card--ai">
        <CardHead Icon={Gear} title="Tools" desc="Comfortable across the platforms international remote teams use every day." />
        <div className="bento__media bento__chips" aria-hidden="true">
          <div className="bento__chip-row" data-dir="left">
            <div className="bento__chip-track">
              {[...TOOLS, ...TOOLS].map((tool, i) => <span key={`${tool}-${i}`} className="bento__chip">{tool}</span>)}
            </div>
          </div>
        </div>
      </Link>

      <Link to="/contact" className="bento__card bento__card--quotes">
        <CardHead Icon={MessageCircle} title="Let’s Work Together" desc="Need dependable support for your inbox, customers, leads, or daily operations?" />
        <div className="bento__media" style={{ padding: '1rem', lineHeight: 1.55 }}>
          Tell me about the role, schedule, tasks, and tools you use. I’ll get back to you with the best next step.
        </div>
      </Link>
    </nav>
  )
}
