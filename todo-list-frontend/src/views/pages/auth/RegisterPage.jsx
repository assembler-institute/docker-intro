import {
  FormRegister,
  GoogleButton,
  LinkRedirect,
  TitleForm,
} from "../../components/authPages";

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 border border-icon bg-purple-100 w-11/12 sm:w-9/12 md:w-7/12 lg:w-1/2 lg:h-full lg:px-7 lg:py-32 xl:px-20">
      <TitleForm title="REGISTER" />
      <GoogleButton />
      <FormRegister />
      <LinkRedirect
        pageLink={{
          message: "Do you have an account?",
          navLink: "/",
          textLink: "Log in",
        }}
      />
    </div>
  );
};

export default RegisterPage;
