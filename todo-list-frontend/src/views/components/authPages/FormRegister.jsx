import { useEffect, useState } from "react";
import { InputElement } from "./InputElement";
import { ButtonForm } from "./ButtonForm";
import { useAuthContext } from "../../../hooks";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { register: authRegister } = useAuthContext();

  useEffect(() => {
    if (errors.username) toast(errors.username.message);
    if (errors.email) toast(errors.email.message);
    if (errors.password) toast(errors.password.message);
  }, [errors.username, errors.email, errors.password]);

  const submitForm = (data) => {
    register(data.username, data.email, data.password);
    authRegister(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="w-11/12 h-44 flex flex-col items-center justify-around"
    >
      <InputElement
        label="Username:"
        type="text"
        useform={{
          ...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username require at least 3 characters",
            },
          }),
        }}
      />
      <InputElement
        label="Email:"
        type="email"
        useform={{
          ...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "invalid email address",
            },
          }),
        }}
      />
      <InputElement
        label="Password:"
        type="password"
        useform={{
          ...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password require at least 5 characters",
            },
          }),
        }}
      />
      <ButtonForm type="submit" />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: { border: "1px solid #A437DB", color: "#A437DB" },
        }}
      />
    </form>
  );
};
