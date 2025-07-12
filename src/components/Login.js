import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, 
        signInWithEmailAndPassword ,
          updateProfile,} from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch(); 

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    function handleButtonClick() {
       const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;
      
  
        if(!isSignInForm){
          //Sign Up logic
          createUserWithEmailAndPassword
      (auth, 
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: name.current.value, 
  photoURL: USER_AVATAR,
}).then(() => {
  const {uid, email, displayName, photoURL} = auth.currentUser;
      dispatch(addUser({
         uid: uid,
         email: email,
        displayName: displayName,
         photoURL: photoURL,
         })
        );
  // Profile updated!
  // ...
  
    //navigate("/browse")

}).catch((error) => {
  // An error occurred
  setErrorMessage(error.message);
  // ...
});
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-" + errorMessage)
    // ..
  });  
          
  }
  else{
  //sign in logic
signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    
    //navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
        }
    };


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
        <form onSubmit={(e) => e.preventDefault()}
        className="bg-black bg-opacity-80 p-6 sm:p-8 md:p-10 lg:p-12 rounded-md w-full max-w-sm text-white">
          <h1 className="text-2xl font-bold mb-6 text-center">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && (<input
            type="text"
            placeholder="Name"
            className="w-full mb-4 p-3 rounded bg-gray-700 text-white placeholder-gray-400"
          />)}

          <input
          ref={email}
            type="email"
            placeholder="Email address"
            className="w-full mb-4 p-3 rounded bg-gray-700 text-white placeholder-gray-400"
          />          
          <input
          ref={password}
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button className="w-full bg-red-600 hover:bg-red-700 font-semibold py-3 rounded mt-2" onClick={handleButtonClick}>
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
