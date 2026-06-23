function ResumeItem({ item }) {
  return (
    <li className="resume-item">
      <time>{item.period}</time>
      <div>
        <h4>{item.title}</h4>
        <p className="resume-item__place">{item.place}</p>
        <p>{item.description}</p>
      </div>
    </li>
  )
}

export default ResumeItem
