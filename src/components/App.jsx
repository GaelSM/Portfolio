import './App.css'
import Footer from './Footer'
import About from './About'
import Projects from './Projects'
import Presentation from './Presentation'
import Works from './Works'


export default function App() {
  return (
    <>
      <Presentation />
      <main>
        <About />
        <Works />
        <Projects />
      </main>
      <Footer />
    </>
  )
}