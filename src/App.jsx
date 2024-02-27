import './App.css'
import About from './components/About'
import Features from './components/Features'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Prac from './components/Prac'
import Pricing from './components/Pricing'
import Footer from './shared/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Prac />
      <Pricing />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
