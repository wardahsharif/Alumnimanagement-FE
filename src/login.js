import React from 'react';
import './login.css';
import Navbar from './Navbar';


const Login = () => {
   
    return(
        <div>

      <Navbar/>   
 <div className="container pt-2 pb-5 border rounded ">
            <h1 className="p-3">Login</h1>

     <div class="mb-3">

  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Username"/>
</div>
<div class="mb-2"> 

  <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Password"/>
</div>
<div className="pt-4 text-center">
  Dont have an account? <a href="signup">signup</a>
  </div>
   </div>

   </div> 
    )
}

export default Login;