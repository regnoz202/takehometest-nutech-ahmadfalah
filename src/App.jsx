import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Adding from './pages/Adding'
import Product from './pages/Product'
import About from './pages/About'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Adding/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </Router>
  )
}

export default App
