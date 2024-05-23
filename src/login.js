import React from 'react';



function Login () {
    return(
        <div className="container pt-5 pb-5 border rounded mt-5">
            <h1>Login</h1>
            <div>

    <input 
    type="inputEmail" 
    className="form-control mt-4" 
    aria-describedby="emailHelp" 
    placeholder="Username"
    name='email'
    />
   </div>

     <div className="form-group p-2">

    <input 
    type="password" 
    className="form-control mt-4" 
    placeholder="Password"
     password='password'
  />

  </div>

   </div>
    )
}

export default Login;