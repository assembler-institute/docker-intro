import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { RiLogoutBoxFill } from "react-icons/ri";
import { useAuthContext } from "../../../hooks";
import { getAuth, signOut } from "firebase/auth";

export const HeaderProfile = () => {
  const { authState, logout } = useAuthContext();
  const { user } = authState;

  const handleLogout = () => {
    if (user.comesFromFirebase) {
      const auth = getAuth();
      signOut(auth)
        .then(() => logout())
        .catch((error) => console.log(error));
    } else {
      logout();
    }
  };
  return (
    <div className="w-full flex items-center justify-start p-2 h-12 bg-icon">
      <Link to="/main">
        <TiArrowBackOutline className="text-purple-200 h-6 w-6 cursor-pointer" />
      </Link>
      <h3 className="text-purple-100 ml-3 text-xl">Profile</h3>
      <RiLogoutBoxFill
        className="absolute right-2 text-2xl text-purple-200 cursor-pointer"
        onClick={handleLogout}
      />
    </div>
  );
};
