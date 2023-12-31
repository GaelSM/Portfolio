import './App.css'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Projects from './Projects'


export default function App() {
  return (
  <>
    <Header />
    <main>
      <About/>
      <Projects />
      <a href="#header" className="up">
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </main>
    <Footer />
  </>
  )
}