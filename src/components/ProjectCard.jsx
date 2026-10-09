import { ExternalIcon, GitHubIcon, ImageIcon } from './Icons.jsx'

export default function ProjectCard({ project }) {
  const { title, description, tags, repoUrl, liveUrl, image, featured, endpoints } = project

  return (
    <article className={`card project ${featured ? 'project--featured' : ''}`}>
      <div className="project__media">
        {image ? (
          <img src={image} alt={`Screenshot of ${title}`} loading="lazy" decoding="async" />
        ) : endpoints ? (
          <div className="project__api" role="img" aria-label={`REST API routes for ${title}`}>
            <ul>
              {endpoints.map(([method, path]) => (
                <li key={method + path}>
                  <span className={`method method--${method.toLowerCase()}`}>{method}</span>
                  <code>{path}</code>
                </li>
              ))}
            </ul>
            <span className="project__api-label">REST API routes (backend only, no UI)</span>
          </div>
        ) : (
          <div className="project__placeholder" role="img" aria-label={`Screenshot placeholder for ${title}`}>
            <ImageIcon />
            <span>Screenshot placeholder</span>
          </div>
        )}
        {featured && <span className="badge">Featured</span>}
      </div>

      <div className="project__body">
        <h3 className="project__title">{title}</h3>
        <p className="project__desc">{description}</p>
        <ul className="tags" aria-label={`Technologies used in ${title}`}>
          {tags.map((t) => (
            <li key={t} className="tag tag--sm">
              {t}
            </li>
          ))}
        </ul>

        <div className="project__links">
          {repoUrl ? (
            <a className="link-btn" href={repoUrl} target="_blank" rel="noopener noreferrer">
              <GitHubIcon width={16} height={16} /> Source Code
            </a>
          ) : (
            <span className="note" title="Set repoUrl for this project in src/data.js">
              Repository link: placeholder (add in src/data.js)
            </span>
          )}
          {liveUrl && (
            <a className="link-btn" href={liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo <ExternalIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
