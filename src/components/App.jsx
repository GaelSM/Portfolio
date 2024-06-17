import './App.css'
import Footer from './Footer'
import About from './About'
import Projects from './Projects'
import Presentation from './Presentation'
import Works from './Works'
import Header from './Header'


export default function App() {
  return (
    <>
      <Header />
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