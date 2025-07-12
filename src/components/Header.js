import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
   useEffect(()=> {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const {uid, email, displayName, photoURL} = user;
    dispatch(addUser({
       uid: uid,
       email: email,
      displayName: displayName,
       photoURL: photoURL,
       })
      );
   navigate("/browse");
  } else {
    // User is signed out
    dispatch(removeUser());
     navigate("/");
  }
});
//unsubscribe when component unmounts
return () => unsubscribe();

    }, []) 
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-40"
        src={LOGO}
        alt="logo"
      />

      {/* //user-icon */}
      {user && (<div className="px-8 py-8 gap-2 ">
        <img
          className="w-8 h-8 rounded-full object-cover"
          src={user?.photoURL} alt="User"
        />
        <button
          onClick={handleSignOut}
          className="text-white font-bold text-sm hover:underline"
        >
          Sign Out
        </button>
      </div>
      )}
    </div>
  );
};

export default Header;
