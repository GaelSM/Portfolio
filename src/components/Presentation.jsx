import Social from "./Social";

export default function Presentation() {
  return (
    <div className="presentation" id="presentation">
      <div className="text">
        <h1> Gael Alejandro Segura Mendoza</h1>
        <h3> Desarrollador Web </h3>
      </div>
      <div className="socials">
        <Social src="https://www.linkedin.com/in/gaelsm/" icon="fa-brands fa-linkedin" text="LinkedIn" />
        <Social src="https://github.com/GaelSM" icon="fa-brands fa-github" text="Github" />
        <Social src="mailto:gaelsegura.mendoza@gmail.com" icon="fa-solid fa-envelope" text="Correo" />
      </div>
    </div>
  )
}