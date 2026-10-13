
import Home from './pages/Home'
import Cart from './pages/Cart'
import ViewDeatils from './pages/ViewDeatils'
import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ProtectRoute from './components/ProtectRoute'

function App() {
  return (
    <BrowserRouter>
      <div className="h-[60px]">
        <Navbar />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          }
        />

        <Route
          path="/abc"
          element={
            <ProtectRoute>
              <Cart />
            </ProtectRoute>
          }
        />

        <Route
          path="/view"
          element={
            <ProtectRoute>
              <ViewDeatils />
            </ProtectRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
