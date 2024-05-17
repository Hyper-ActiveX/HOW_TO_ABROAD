import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import './App.css'
import Navbar from './components/navBar/Navbar'
import Home from './components/home/Home';
import LoginModal from './components/login/LogIn';
import Scourse from './components/search-course/SearchCourse';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
    <div className='app2'>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route
          path="/search-course"
          element={<Scourse/>}
        />
      </Routes>
      <LoginModal/>

    </Router>
    </div>
    </div>
  )
}

export default App
