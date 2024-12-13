import {BrowserRouter as Router, Routes , Route, Link} from 'react-router-dom'
import './App.css'
import Counter from './Counter'
import ApiCall from './ApiCall'
import { useTheme } from './ThemeContext'
import FormData from './formData'
import TodoApp from './TodoApp'
import UseMemo from './UseMemo'
import UseRef from './useRef'

function App() {
  const {theme, toggleTheme} = useTheme()

  const appStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    textAlign: "center",
    padding: "20px",
  };

  console.log(theme)


  return (
    <>
    <Router>
    <div style={appStyle}>
    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counter">counter</Link></li>
          <li><Link to="/apiCall">apiCall</Link></li>
          <li><Link to="/TodoApp">TodoApp</Link></li>
          <li><Link to="/formData">formData</Link></li>
          <li><Link to="/useMemo">useMemo</Link></li>
          <li><Link to="/useRef">useRef</Link></li>
        </ul>
      </nav>
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      
      <Routes>
      <Route path="/" element={<h2>Welcome to the App</h2>} />
        <Route path='/counter' element={<Counter/>} /> 
        <Route path='/apiCall' element={<ApiCall/>} />
        <Route path ='/TodoApp' element={<TodoApp/>}/>
        <Route path='/formData' element={<FormData/>}/>
        <Route path='/useMemo' element={<UseMemo/>}/>
        <Route path='/useRef' element={<UseRef/>}/>
      </Routes>
      </div>
    </Router>
    
     
   
   
    </>
  )
}

export default App
