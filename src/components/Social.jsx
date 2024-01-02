import "./Social.css"

export default function Social({ src, icon, text }) {
  return (
    <a href={src} target="_blank" rel="noopener noreferrer" className="social">
      <i className={icon} />
      <p> {text} </p>
    </a>
  )
}
