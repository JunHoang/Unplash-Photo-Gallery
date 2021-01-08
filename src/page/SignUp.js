import { useFormik } from "formik";
import React from "react";

export default function SignUp() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (value) => {
      console.log("Formik", value);
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Email Field is required.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Email is invalid.";
      }

      if (!values.password) {
        errors.password = "Password Field is required.";
      } else if (values.password.length < 6) {
        errors.password = "Password must be longer than 6 characters.";
      }

      return errors;
    },
  });

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-700">
        <form className="m-5 w-10/12" onSubmit={formik.handleSubmit}>
          <h1 className="w-full text-4xl tracking-widest text-center my-6">
            Sign Up Here
          </h1>
          <div className="w-full my-6">
            <input
              type="email"
              className="p-2 rounded shadow w-full text-black"
              name="email"
              placeholder="Email or Username"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <p>{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="w-full my-6">
            <input
              type="password"
              className="p-2 rounded shadow w-full text-black"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <p>{formik.errors.password}</p>
            ) : null}
          </div>
          <div className="w-full my-10">
            <button
              type="submit"
              className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black"
            >
              {/* {isLoading ? (<i className="fas fa-circle-notch fa-spin" />): ("SignUp")} */}
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
