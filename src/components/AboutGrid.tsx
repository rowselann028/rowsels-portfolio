import type { CSSProperties } from 'react'
import { MapPin, Briefcase, ChatsCircle, CalendarCheck, Megaphone, ShoppingCart } from '@/components/slab'
import { profile } from '@/data/profile'

const GWS = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }
const GHL = { src: '/icons/gohighlevel.png', name: 'GoHighLevel' }
const ZENDESK = { src: '/icons/zendesk.svg', name: 'Zendesk' }
const SLACK = { src: '/icons/slack.svg', name: 'Slack' }
const META = { src: '/icons/facebook.svg', name: 'Meta Business Suite' }
const OPENAI = { src: '/icons/openai.svg', name: 'ChatGPT' }
const CLAUDE = { src: '/icons/anthropic.svg', name: 'Claude' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  { index: '01', title: 'Email, chat & ticket support', marks: [ZENDESK, GWS, SLACK] },
  { index: '02', title: 'Real estate lead follow-up & appointment setting', marks: [GHL, GWS] },
  { index: '03', title: 'Social media management & client engagement', marks: [META, GWS] },
  { index: '04', title: 'E-commerce listing & administrative support', marks: [OPENAI, CLAUDE, GWS] },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">{`Hi, I’m ${profile.firstName}.`}</h1>
        <p className="pgrid__lede">
          A versatile Virtual Assistant with 9+ years of experience supporting customers, teams, and businesses across multiple industries.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I help businesses stay organized, responsive, and on track.
            <span> I bring strong communication, attention to detail, and a practical approach to getting things done.</span>
          </p>

          <p className="agrid__note">
            My background includes customer support, real estate, healthcare, telecommunications, social media, and e-commerce. I’m comfortable working independently, learning new systems quickly, and adapting to different client workflows.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span key={m.name} className="agrid__mark" style={{ '--i': c.marks.length - i } as CSSProperties}>
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">{c.index}</span>
              </li>
            ))}
          </ul>

          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark"><Briefcase size={16} weight="fill" aria-hidden="true" /></span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">9+ years experience</span>
                <span className="agrid__cell-meta">Customer support, sales & operations</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark"><MapPin size={16} weight="fill" aria-hidden="true" /></span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">GMT+8 · Remote-ready</span>
              </span>
            </span>
          </div>
        </div>

        <div className="agrid__portrait">
          <img src={profile.portraitSrc ?? profile.avatarSrc} alt={profile.hero.portraitAlt} loading="eager" decoding="async" width={400} height={400} />
        </div>
      </div>
    </section>
  )
}
