export default function Card({ title, description, image, live }) {
  return (
    <div className="card">
      <h3> {title} </h3>
      <p> {description} </p>
      <a href={live} target="_blank" rel="noreferrer">
        <img src={image} alt="" />
      </a>
    </div>
  )
}