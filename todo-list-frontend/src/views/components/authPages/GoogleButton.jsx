import { IoLogoGoogle } from "react-icons/io";
import { getAuth, signInWithPopup } from "firebase/auth";
import { googleProvider } from "../../../firebase/firebase";
import { useAuthContext } from "../../../hooks/useAuthContext";

export const GoogleButton = () => {
  const { authFirebase } = useAuthContext();

  const auth = getAuth();

  const loginWithPopup = async () => {
    const response = await signInWithPopup(auth, googleProvider);
    authFirebase({
      username: response.user.displayName,
      email: response.user.email,
    });
  };

  return (
    <div className="w-11/12 flex flex-col items-center justify-around">
      <button
        className="w-10/12 h-7 flex items-center justify-center mt-1 bg-icon py-[0.09rem] text-sm"
        onClick={loginWithPopup}
      >
        <IoLogoGoogle className="mr-2" />
        Sign in with Google
      </button>
      <div className="flex items-center justify-between my-4 w-10/12">
        <div className="border-b border-text opacity-30 w-2/5 h-1" />
        or
        <div className="border-b border-text opacity-30 w-2/5 h-1" />
      </div>
    </div>
  );
};
