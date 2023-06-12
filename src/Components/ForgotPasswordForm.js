import "../styles/forgotpassword.css";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ButtonLarge from "./Buttons";
import * as auth from "../redux/constants/auth";
import { useDispatch } from "react-redux";
import { closedAuthModal, displayedAuthModal } from "../redux/slices/authSlice";

export default function ForgotPasswordForm() {
  const dispatch = useDispatch();
  function displayCreateNewPwd() {
    dispatch(closedAuthModal(auth.forgotPwd));
    dispatch(displayedAuthModal(auth.CreateNewPwd));
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => console.log(data);
  return (
    <form className="forgot-password_form" onSubmit={handleSubmit(onSubmit)}>
      <div className="forgot-password_input-container">
        <input
          name="email"
          type="text"
          {...register("email")}
          className={`forgot-password_email-input ${
            errors.email ? "is-invalid" : ""
          }`}
          placeholder="email address"
        />
        <p className="error-message">{errors.email?.message}</p>
      </div>

      <ButtonLarge text="SEND" onclick={displayCreateNewPwd} />
    </form>
  );
}
