import './App.css'
import Home from './components/paginas/Home'
import Empresa from './components/paginas/Empresa'
import Contato from './components/paginas/Contato'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Layout/Footer'
import Navbar from './components/Layout/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/empresa' element={<Empresa />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
