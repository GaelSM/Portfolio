export default function Card({image, live}) {
  return (
    <a href={live} target="_blank" rel="noreferrer">
      <img src={image} alt="" />
    </a>
  )
}