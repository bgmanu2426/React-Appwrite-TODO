import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/profile' element={<Profile />}></Route>
          <Route path='*' element={<h1>404 Not Found</h1>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
