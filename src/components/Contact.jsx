import { profile } from '../data.js'
import Section from './Section.jsx'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'

const rows = [
  { key: 'email', label: 'Email', Icon: MailIcon, href: (v) => `mailto:${v}`, text: (v) => v },
  { key: 'linkedin', label: 'LinkedIn', Icon: LinkedInIcon, href: (v) => v, text: () => 'View LinkedIn profile' },
  { key: 'github', label: 'GitHub', Icon: GitHubIcon, href: (v) => v, text: () => 'View GitHub profile' },
]

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk">
      <p className="lead">
        I'm open to frontend and full-stack opportunities. The best way to reach me is by email or through
        LinkedIn.
      </p>
      <ul className="grid grid--contact">
        {rows.map(({ key, label, Icon, href, text }) => {
          const value = profile[key]
          const external = key !== 'email'
          return (
            <li key={key}>
              {value ? (
                <a
                  className="card contact"
                  href={href(value)}
                  {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  <Icon />
                  <span>
                    <strong>{label}</strong>
                    <small>{text(value)}</small>
                  </span>
                </a>
              ) : (
                <div className="card contact is-placeholder">
                  <Icon />
                  <span>
                    <strong>{label}</strong>
                    <small>Placeholder: add your {label.toLowerCase()} in src/data.js</small>
                  </span>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
