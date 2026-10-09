import { useReveal } from '../hooks.js'

/** Consistent section wrapper with heading and entrance animation. */
export default function Section({ id, eyebrow, title, children }) {
  const ref = useReveal()
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container reveal" ref={ref}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`} className="section-title">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
