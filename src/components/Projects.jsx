import { projects } from '../data.js'
import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid grid--projects">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  )
}
