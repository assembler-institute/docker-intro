import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-w-full h-screen flex flex-col items-center justify-center lg:flex-row">
      <div className="p-3 pb-7 flex flex-col items-center justify-center lg:w-1/2">
        <img
          src="https://res.cloudinary.com/duokspzx0/image/upload/v1681295194/todolist/listkeeper-low-resolution-logo-color-on-transparent-background_1_grabns.png"
          alt="logo"
          className="w-32 lg:w-72 lg:m-0"
        />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
