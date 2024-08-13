import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Hero, Navbar, Tech, Projects, StarsCanvas} from './components';

const App = () => {
  return (
    <BrowserRouter className="overflow-hidden">
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <div className="relative mt-px bg-primary">
          <About/>
          <Experience/>
          <Tech/>
          <Projects/>
          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
