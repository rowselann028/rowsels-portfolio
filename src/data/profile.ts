import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Rowsel Ann Capili',
  firstName: 'Rowsel',
  handle: '@rowselann028',
  role: 'Virtual Assistant | Customer Support & Operations',
  avatarSrc: '/avatar.svg',
  verifiedLabel: '9+ years of customer service and support experience',
  email: 'your.email@example.com',
  location: 'Pampanga, Philippines',
  stats: [
    { value: '9+ yrs', label: 'Customer support experience', Icon: Briefcase },
    { value: 'Multi-industry', label: 'Real estate, healthcare, e-commerce & telco', Icon: SealCheck },
    { value: 'GMT+8', label: 'Philippines | Remote-ready', Icon: Clock },
  ],
  displayName: { line1: 'Reliable support.', line2: 'Real results.' },
  hero: {
    body: 'Virtual Assistant helping businesses stay organized, responsive, and connected through customer support, real estate assistance, social media, and day-to-day operations.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Portrait of Rowsel Ann Capili',
  },
  socials: [],
}
