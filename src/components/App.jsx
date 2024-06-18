import './App.css'
import Footer from './Footer'
import Profile from './Profile'
import Projects from './Projects'
import Presentation from './Presentation'
import Works from './Works'
import Header from './Header'


export default function App() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <Profile />
        <Works />
        <Projects />
      </main>
      <Footer />
    </>
  )
}