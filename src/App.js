import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/welcome'
import About from './pages/aboutus';
import Registration from "./pages/registration";
import Productpage from './pages/product';
import Admindashboard from './pages/admindash';
import Farmerdashboard from './pages/farmerdashboard';
import Impact from './pages/impact';
import Singleproduct from './pages/singleproduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/about' element={<About />} />
        <Route path='/membersign' element={<Registration />} />
        <Route path='/product' element={<Productpage />} />
        <Route path='/adminpanel' element={<Admindashboard/>}/>
        <Route path='/farmerpanel' element={<Farmerdashboard/>}/>
        <Route path='/impact' element={<Impact/>}/>
        <Route path='/single' element={<Singleproduct/>}/>
      </Routes>
    </Router>
  );
}

export default App;
