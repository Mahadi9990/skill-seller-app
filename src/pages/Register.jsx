import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Header from "../components/header";

export default function Register() {
  const {createUser,setuser} = use(AuthContext)
  const handleRegister =(e)=>{
    e.preventDefault()
    const form = e.target
    const userName =form.userName.value
    const photoUrl =form.photoUrl.value
    const email =form.email.value
    const password =form.password.value
    console.log(userName,photoUrl,email,password)
    createUser(email,password)
    .then(userCredential => {
    const user = userCredential.user;
    setuser(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
  }
  return (
    <div>
      <Header/>
      <div className="card-body max-w-[600px] mx-auto">
        <h1 className="text-2xl font-extrabold text-center">Register page</h1>
        <form className="fieldset" onSubmit={handleRegister}>
          <label className="label">User Name</label>
          <input name="userName" type="text" className="input w-full" placeholder="user name" />
          <label className="label">Photo URL</label>
          <input name="photoUrl" type="text" className="input w-full" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input name="email" type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" type="password" className="input w-full" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
          <p>Have a account go to <Link className="text-red-600 font-bold" to='/auth/login' >Login</Link></p>
        </form>
      </div>
    </div>
  );
}
