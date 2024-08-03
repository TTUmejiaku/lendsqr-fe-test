import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useFormValidation } from "@/hooks";
import { FileRoute } from "@/constants";
import { FormValues } from "@/types";

export default function LoginForm() {
  const initialValues: FormValues = { email: "", password: "" };

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { values, errors, touched, handleChange, handleSubmit, isError } =
    useFormValidation(initialValues);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = () => {
    setTimeout(() => {
      navigate({ to: FileRoute.Dashboard });
    }, 500);
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='form__group'>
          <input
            id='email'
            name='email'
            placeholder='Email'
            type='email'
            required
            value={values.email}
            onChange={handleChange}
            className={touched.email && errors.email ? "error" : ""}
          />
          {touched.email && errors.email && (
            <div className='errorMessage'>{errors.email}</div>
          )}
        </div>

        <div className='form__group mt-24'>
          <div className='inner-div'>
            <input
              id='password'
              name='password'
              placeholder='Password'
              required
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              className={touched.password && errors.password ? "error" : ""}
            />
            <p onClick={handleShowPassword}>{showPassword ? "HIDE" : "SHOW"}</p>
          </div>
          {touched.password && errors.password && (
            <div className='errorMessage'>{errors.password}</div>
          )}
        </div>

        <p className='mt-24'>FORGOT PASSWORD</p>

        <button
          type='submit'
          disabled={isError}
          className={`mt-31 ${isError ? "isError" : ""}`}
        >
          LOG IN
        </button>
      </form>
    </div>
  );
}
