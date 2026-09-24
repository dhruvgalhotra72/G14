import Home from './pages/Home'
import Cart from './pages/Cart'
import ViewDeatils from './pages/ViewDeatils'
import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div className='gap h-[60px]'>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abc" element={<Cart />} />
        <Route path="/view" element={<ViewDeatils />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App