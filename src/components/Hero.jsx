import { profile } from '../data.js'
import SocialLinks from './SocialLinks.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__avatar" aria-hidden="true">
          {profile.initials}
        </div>
        <p className="eyebrow">Hello, I'm</p>
        <h1 id="hero-title" className="hero__name">
          {profile.name}
        </h1>
        <p className="hero__role">{profile.title}</p>
        <p className="hero__text">{profile.tagline}</p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn--ghost" href="#contact">
            Contact Me
          </a>
        </div>
        <SocialLinks />
      </div>
    </section>
  )
}
