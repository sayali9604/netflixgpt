import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
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
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-40"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
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
