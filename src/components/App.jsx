import './App.css'
import Footer from './Footer'
import About from './About'
import Projects from './Projects'
import Presentation from './Presentation'
import Works from './Works'
import Navbar from './Navbar'


export default function App() {
  return (
    <>
      <Navbar />
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