import {
  FormLogin,
  GoogleButton,
  LinkRedirect,
  TitleForm,
} from "../../components/authPages";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 border border-icon bg-purple-100 w-11/12 sm:w-9/12 md:w-7/12 lg:w-1/2 lg:h-full lg:px-11 lg:py-32 xl:px-[5.4rem] 2xl:px-32">
      <TitleForm title="LOGIN" />
      <GoogleButton />
      <FormLogin />
      <LinkRedirect
        pageLink={{
          message: "Don't have an account?",
          navLink: "/register",
          textLink: "Sign up",
        }}
      />
    </div>
  );
};

export default LoginPage;
