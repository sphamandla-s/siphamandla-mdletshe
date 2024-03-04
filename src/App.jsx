import ButtonGradient from './assets/svg/ButtonGradient'
import Button from './components/Button'
import Header from './components/Header'
import Hero from './components/Hero'
import { Projects } from './components/Projects'
import Skills from './components/Skills'


function App() {

  return (
    <>

      <div className=' pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Skills />
        <Projects />
      </div>
      <ButtonGradient />
    </>

  )
}

export default App
