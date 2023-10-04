import { Link } from "react-router-dom";
import { useAuthContext } from "../../../hooks";

export const Header = () => {
  const { authState } = useAuthContext();
  const { user } = authState;

  return (
    <header className="flex items-center justify-between p-4 w-full lg:items-start">
      <img
        src="https://res.cloudinary.com/duokspzx0/image/upload/v1681373982/todolist/LISTKEEPERNAME_c9jhrv.png"
        alt="logo"
        className="w-16 lg:w-48 lg:m-0"
      />
      <Link
        to="/profile"
        className="flex items-center justify-center bg-name rounded-full overflow-hidden border border-name w-7 h-7 lg:w-10 lg:h-10"
      >
        {user && user.img ? (
          <img src={user.img} />
        ) : (
          user.username[0].toUpperCase()
        )}
      </Link>
    </header>
  );
};
