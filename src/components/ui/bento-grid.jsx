import './bento-grid.css'

export function BentoGrid({ children, className = '' }) {
  return <div className={`bento-grid ${className}`.trim()}>{children}</div>
}

export function BentoGridItem({
  title,
  description,
  header,
  icon,
  containerClassName = '',
  className = '',
}) {
  return (
    <article
      className={`bento-grid-item group/bento ${containerClassName} ${className}`.trim()}
    >
      {header && <div className="bento-grid-item__header">{header}</div>}
      <div className="bento-grid-item__body">
        {icon && <span className="bento-grid-item__icon">{icon}</span>}
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </article>
  )
}
