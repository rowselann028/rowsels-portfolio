import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'
import Autopilot, { TOOLS } from '@/components/Autopilot'

/**
 * ServicesGrid - the Services view on one glass sheet.
 *
 * Three bands, top to bottom: your three-step method (on a dark plate so it
 * is the first thing the eye lands on), the five services as cards that carry
 * the marks of what each one is built with, and the live automation demo
 * scaled into whatever height is left. Same object language as Home and
 * Projects: the glass, the bento card, plated marks, orange for the index
 * and the accent.
 *
 * Every string below is a PLACEHOLDER. Replace it, or hand this file to your
 * AI assistant and tell it what to put in each spot.
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Understand',
    body: 'I learn your workflow, priorities, tools, and communication style before taking over recurring tasks.',
    Icon: MagnetStraight,
    chips: ['Workflow', 'Priorities', 'Tools', 'Expectations'],
  },
  {
    index: '02',
    label: 'Support',
    body: 'I manage assigned tasks consistently, communicate clearly, and keep records organized and up to date.',
    Icon: Timer,
    chips: ['Inbox', 'Tickets', 'Follow-ups', 'Documentation'],
  },
  {
    index: '03',
    label: 'Improve',
    body: 'I look for practical ways to make support smoother, faster, and easier for both you and your customers.',
    Icon: Trophy,
    chips: ['Accuracy', 'Response time', 'Organization', 'Reliability'],
  },
]

/* ---------- The services ---------- */

// Example tool marks from /public/icons. Swap for the tools you actually use.
const GHL = '/icons/gohighlevel.png'
const OPENAI = '/icons/openai.svg'
const GWS = '/icons/googleworkspace.svg'
const SLACK = '/icons/slack.svg'
const ZENDESK = '/icons/zendesk.svg'
const META = '/icons/facebook.svg'
const CLAUDE = '/icons/anthropic.svg'

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Email, Chat & Ticket Support',
    description: 'Professional customer support across inboxes, chat, and ticket queues.',
    chip: 'Customer Support',
    logos: [ZENDESK, GWS, SLACK],
    bullets: ['Respond to customer inquiries', 'Investigate and resolve tickets', 'Maintain clear case notes'],
  },
  {
    index: '02',
    title: 'Administrative Support',
    description: 'Reliable day-to-day assistance that keeps records, tasks, and communication organized.',
    chip: 'Admin',
    logos: [GWS, SLACK, OPENAI],
    bullets: ['Data entry and documentation', 'Inbox and calendar support', 'Task and file organization'],
  },
  {
    index: '03',
    title: 'Real Estate Support',
    description: 'Lead and client support for agents, property sellers, and real estate teams.',
    chip: 'Real Estate',
    logos: [GHL, GWS, META],
    bullets: ['Property inquiry handling', 'Lead follow-ups and appointment setting', 'Listing and client coordination'],
  },
  {
    index: '04',
    title: 'Social Media Support',
    description: 'Hands-on support for business pages, inquiries, and day-to-day online engagement.',
    chip: 'Social Media',
    logos: [META, GWS, CLAUDE],
    bullets: ['Post and listing updates', 'Message and inquiry responses', 'Content coordination'],
  },
  {
    index: '05',
    title: 'E-commerce Support',
    description: 'Product listing and catalog support for online stores and growing businesses.',
    chip: 'E-commerce',
    logos: [GWS, OPENAI, CLAUDE],
    bullets: ['Create and update product listings', 'Maintain pricing and product details', 'Support customer and order information'],
  },
]

/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          Support that keeps your business moving.
        </h1>
        <p className="pgrid__lede">
          Flexible virtual assistance across customer support, real estate, admin, social media, and e-commerce.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* One dark plate, the headline on the left, the three stages wired
            in order on the right with a signal running them. */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">How I Work</span>
            <h2 className="sgrid__method-title" id="method-title">
              Understand. Support. Improve.
              <br />
              <span>A simple process built around your workflow.</span>
            </h2>
            <p className="sgrid__method-sub">
              Clear expectations, consistent communication, and dependable follow-through from day one.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Five cards, each carrying the marks of what it is built with. */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">What I can support.</h2>
            <p className="sgrid__offers-sub">Choose the support you need now and scale from there.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* The live workflow. Its caption and the tool chips sit in a header
            above the window, so the canvas gets the whole glass width. */}
        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">
              <span className="sgrid__flow-eyebrow">Workflow mindset</span>
              <h2 className="sgrid__flow-title">Organized work, clear handoffs.</h2>
              <p className="sgrid__flow-sub">
                I work comfortably across different systems and workflows, keeping tasks documented, communication clear, and follow-ups on track.
              </p>
            </div>
            <ul className="sgrid__flow-tools" role="list" aria-label="Tools that power this flow">
              {TOOLS.map(({ Icon: ToolIcon, label }) => (
                <li key={label} className="sgrid__flow-tool">
                  <ToolIcon size={14} weight="duotone" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </header>
          <div className="sgrid__flow-main">
            <Autopilot compact maxScale={1.08} />
          </div>
        </div>
      </div>
    </section>
  )
}
