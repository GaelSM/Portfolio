import "./Navbar.css"

export default function Header() {
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
    </header>
  )
}
