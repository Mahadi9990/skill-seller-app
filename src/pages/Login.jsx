import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Header from "../components/Header";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const emailRef = useRef();
  const { singIn, setuser, forgotEmail, googleSubmit } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false); 

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please enter your email first!");
      return;
    }
    forgotEmail(email)
      .then(() => {
        toast.success("Check your email for reset instructions");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    singIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setuser(user);
        toast.success("Signed in successfully!");
        navigate(`${location.state ? location.state : "/"}`);
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
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Header />
      <div className="card-body max-w-[600px] mx-auto">
        <h1 className="text-2xl font-extrabold text-center">Login Page</h1>
        <form className="fieldset" onSubmit={handleLogin}>
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input w-full"
            placeholder="Email"
            ref={emailRef}
            required
          />

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
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute top-3 right-3 cursor-pointer text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />} 
            </span>
          </div>

          <div className="mt-2">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="link link-hover text-blue-600"
            >
              Forgot password?
            </button>
          </div>

          <button className="btn btn-neutral mt-4">Login</button>
          <button
            type="button"
            onClick={handleGoogle}
            className="btn btn-success mt-4"
          >
            Continue with Google
          </button>

          <p className="mt-3">
            Don’t have an account?{" "}
            <Link className="text-red-600 font-bold" to="/auth/register">
              Register
            </Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
