import '../styles/forgotpassword.css'
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function ForgotPasswordForm() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit,formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form className="form-component" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
          <input name="email" type="text" {...register('email')} className={`email-input ${errors.email ? 'is-invalid' : ''}`} placeholder='email address'/>
                            <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
        </div>
        <div>
          <button className="primary-button" type="submit">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}
