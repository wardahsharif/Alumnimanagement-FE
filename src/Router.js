import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './login';
import SignUp from './signup';



const Routers = () => {
    return (
  <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} /> 

      </Routes>
     </Router> 
    )
}

export default Routers;