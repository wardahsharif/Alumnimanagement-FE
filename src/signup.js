import React from 'react';
import Navbar from './Navbar';
import './login.css';


const Login = () => {
    return(
        <div>
        <Navbar/>
 <div className="container pt-2 pb-5 border rounded ">
            <h1 className="p-3">Signup</h1>

     <div class="mb-3">

  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Firstname"/>
</div>
    <div class="mb-3">

  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Lastname"/>
</div>
    <div class="mb-3">

  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Gender"/>
</div>
    <div class="mb-3">

  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Email"/> 
</div> 
<div class="mb-2">

  <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Password"/>
</div>
<div className="pt-4 text-center">
  Already have an account? <a href="login">Login</a>
  </div>
   </div>
   
   </div>
    )
}

export default Login;