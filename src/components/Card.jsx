function Card({image, live}) {
  return (
    <a href={live} target="_blank">
      <img src={image} alt="" />
    </a>
  )
}

export default Card

