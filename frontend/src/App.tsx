import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazy } from "react"

const Home = lazy(()=> import("./pages/Home"))
const Search = lazy(()=> import("./pages/Search"))
const Cart = lazy(()=> import("./pages/Cart"))

const App = () => {
  return (
    <Router>
      {/* Header */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Search />} />
        <Route path="/" element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
