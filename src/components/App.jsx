import './App.css'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Projects from './Projects'
import Presentation from './Presentation'


export default function App() {
  return (
    <>
      <Presentation />
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}