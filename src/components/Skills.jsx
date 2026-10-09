import { skillGroups } from '../data.js'
import Section from './Section.jsx'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technologies I work with">
      <div className="grid grid--skills">
        {skillGroups.map((g) => (
          <article key={g.title} className="card">
            <h3 className="card__title">{g.title}</h3>
            <ul className="tags">
              {g.items.map((s) => (
                <li key={s} className="tag">
                  {s}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
