import Card from './Card'
import data from './projects.json'

function Projects() {
  return (
    <section id="projects" className="observe">
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

export default Projects