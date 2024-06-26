import { useState } from "react"
import "./Navbar.css"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick(event) {
    const target = event.target
    if(target.tagName !== "A" && target.tagName !== "I") return
    setIsOpen(false)
    document.body.style.overflow = ""
  }

  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><a href="#about-me"> Perfil </a></li>
          <li><a href="#experience"> Experiencia </a></li>
          <li><a href="#projects"> Proyectos </a></li>
          <li><a href="#presentation"> Contacto </a></li>
        </ul>
      </nav>

      <nav className="navbar show">
        <div className="hamburger">
          <i className="fa-solid fa-bars-staggered" onClick={() => {
            setIsOpen(true)
            document.body.style.overflow = "hidden"
          }}/>
        </div>
      </nav>

      <ul className={`mobile ${isOpen ? "open" : ""}`} onClick={handleClick}>
        <div className="close">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <li><a href="#about-me"> Perfil </a></li>
        <li><a href="#experience"> Experiencia </a></li>
        <li><a href="#projects"> Proyectos </a></li>
        <li><a href="#presentation"> Contacto </a></li>
      </ul>
    </header>
  )
}
