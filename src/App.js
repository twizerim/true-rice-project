
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Welcome from './pages/welcome';
import Login from "./pages/login"
import Contact from "./pages/contact"
import About from './pages/aboutus';
import Registration from "./pages/registration"


function App() {
  return (
 
<Router>
  <Routes>
    <Route path='/' element={<Welcome/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/membersign' element={<Registration/>}></Route>
  </Routes>
</Router>

  
  );
}

export default App;
