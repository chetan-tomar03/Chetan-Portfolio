import { profile } from '../data.js'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'

const items = [
  { key: 'github', label: 'GitHub', Icon: GitHubIcon, href: (v) => v },
  { key: 'linkedin', label: 'LinkedIn', Icon: LinkedInIcon, href: (v) => v },
  { key: 'email', label: 'Email', Icon: MailIcon, href: (v) => `mailto:${v}` },
]

/** Icon links. Empty values in data.js render as a disabled placeholder. */
export default function SocialLinks() {
  return (
    <ul className="socials" aria-label="Social links">
      {items.map(({ key, label, Icon, href }) => {
        const value = profile[key]
        return (
          <li key={key}>
            {value ? (
              <a
                className="icon-btn"
                href={href(value)}
                aria-label={label}
                title={label}
                {...(key !== 'email' && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                <Icon />
              </a>
            ) : (
              <span
                className="icon-btn is-placeholder"
                role="img"
                aria-label={`${label} link not added yet`}
                title={`${label}: placeholder. Add your URL in src/data.js`}
              >
                <Icon />
              </span>
            )}
          </li>
        )
      })}
    </ul>
  )
}
