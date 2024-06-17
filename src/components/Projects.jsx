import Card from './Card'
import data from '../documents/projects.json'

export default function Projects() {
  return (
    <section id="projects">
        <h2> Proyectos </h2>
        <div className="cards">
          {
            data.map((data) => {
              return <Card key={data.id} {...data} />
            })
          }
        </div>
      </section>
  )
}