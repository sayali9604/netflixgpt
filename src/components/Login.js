import { useState } from "react";
import Header from "./Header";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);

    };

  return (
    <div className="relative min-h-screen">
      {/* Header always on top */}
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png"
          alt="bg"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Centered Form */}
      <div className="flex justify-center items-center h-screen">
        <form className="bg-black bg-opacity-80 p-6 sm:p-8 md:p-10 lg:p-12 rounded-md w-full max-w-sm text-white">
          <h1 className="text-2xl font-bold mb-6 text-center">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && (<input
            type="text"
            placeholder="Name"
            className="w-full mb-4 p-3 rounded bg-gray-700 text-white placeholder-gray-400"
          />)}

          <input
            type="email"
            placeholder="Email address"
            className="w-full mb-4 p-3 rounded bg-gray-700 text-white placeholder-gray-400"
          />          
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <button className="w-full bg-red-600 hover:bg-red-700 font-semibold py-3 rounded mt-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign Up Now" :"Already Registered.Sign In Now" }</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
