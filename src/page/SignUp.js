import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

export default function SignUp() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (value) => {
      console.log("Formik", value);
    },
    validationSchema: Yup.object({
        email: Yup.string().required('Email is required.').email('Email is invalid.'),
        password: Yup.string().required('Password is required.').min(6,'Password must be longer than 6 characters.') 
    })
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
