import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import Login from "./pages/login";
import Contact from "./pages/contact";
import About from './pages/aboutus';
import Registration from "./pages/registration";
import Productpage from './pages/product';
import Signup from './pages/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/membersign' element={<Registration />} />
        <Route path='/product' element={<Productpage />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
