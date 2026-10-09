import { about } from '../data.js'
import Section from './Section.jsx'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Early-career developer, focused on the web">
      <div className="about">
        {about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>
  )
}
