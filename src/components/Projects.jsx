import Card from './Card'
import data from './projects.json'

function Projects() {
  return (
    <section id="projects" className="observe">
        <h2> Proyectos </h2>
        <div className="cards">
          {
            data.map(({id, image, live}) => {
              return <Card key={id} image={image} live={live}/>
            })
          }
        </div>
      </section>
  )
}

export default Projects