import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './login';
import SignUp from './signup';
import Homepage from './homepage';
import About from './About';



const Routers = () => {
    return (
  <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
       <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} /> 

      </Routes>
     </Router> 
    )
}

export default Routers;