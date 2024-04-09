import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome';
import Login from "./pages/login";
import About from './pages/aboutus';
import Registration from "./pages/registration";
import Productpage from './pages/product';
import Signup from './pages/signup';
import Admindashboard from './pages/admindash';
import Farmerdashboard from './pages/farmerdashboard';
import Impact from './pages/impact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/membersign' element={<Registration />} />
        <Route path='/product' element={<Productpage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/adminpanel' element={<Admindashboard/>}/>
        <Route path='/farmerpanel' element={<Farmerdashboard/>}/>
        <Route path='/impact' element={<Impact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
