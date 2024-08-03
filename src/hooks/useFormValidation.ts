import { REGEX_EMAIL, PASSWORD_LENGTH } from "@/constants";
import { useState } from "react";

interface FormValues {
  email: string;
  password: string;
}

interface Errors {
  [key: string]: string | undefined;
}

export const useFormValidation = (initialValues: FormValues) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormValues, boolean>>
  >({});

  const validate = (values: FormValues) => {
    const errors: Errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!REGEX_EMAIL.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < PASSWORD_LENGTH) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validate({ ...values, [name]: value })[name],
    }));
  };

  const handleSubmit =
    (onSubmit: () => void) => (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formErrors = validate(values);

      if (Object.keys(formErrors).length === 0) {
        onSubmit();
      } else {
        setErrors(formErrors);
      }
    };

  const isError = !!(errors.email || errors.password);

  return { values, errors, touched, handleChange, handleSubmit, isError };
};
