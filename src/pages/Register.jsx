import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {
  const { createUser, setuser, googleSubmit, updataUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); 

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    const strongPassword = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!strongPassword.test(password)) {
      toast.error("Password must be at least 6 chars and include a number & uppercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updataUser({ displayName: userName, photoURL: photoUrl })
          .then(() => {
            setuser({ ...user, displayName: userName, photoURL: photoUrl });
            toast.success("Registration successful!");
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
            setuser(user);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogle = () => {
    googleSubmit()
      .then((result) => {
        const user = result.user;
        setuser(user);
        toast.success("Signed in with Google!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Header />
      <div className="card-body max-w-[600px] mx-auto">
        <h1 className="text-2xl font-extrabold text-center">Register Page</h1>
        <form className="fieldset" onSubmit={handleRegister}>
          <label className="label">User Name</label>
          <input name="userName" type="text" className="input w-full" placeholder="User name" />

          <label className="label">Photo URL</label>
          <input name="photoUrl" type="text" className="input w-full" placeholder="Photo URL" />

          <label className="label">Email</label>
          <input name="email" type="email" className="input w-full" placeholder="Email" required />

          <label className="label">Password</label>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"} 
              className="input w-full pr-10"
              placeholder="Password"
              required
            />
            <span
              className="absolute top-3 right-3 cursor-pointer text-gray-600"
              onClick={() => setShowPassword(!showPassword)} 
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />} 
            </span>
          </div>

          <button className="btn btn-neutral mt-4">Register</button>
          <button type="button" onClick={handleGoogle} className="btn btn-success mt-4">
            Continue with Google
          </button>

          <p className="mt-3 text-center">
            Already have an account?{" "}
            <Link className="text-red-600 font-bold" to="/auth/login">
              Login
            </Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
