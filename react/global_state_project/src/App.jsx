import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import ReducerHookPractice from './ReducerHookPractice'
import ReducePractice2 from './ReducerPractice2'

function App() {

  let x = 10;

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "30px",
        minHeight: "60vh"
      }}
    >
      <Home x={x} />
      <About data={x} />

      <ReducerHookPractice />

      <ReducePractice2 />
    </div>
  )
}

export default App