import { useFormik } from "formik";
import React, { useContext } from "react";
import Swal from "sweetalert2";
import { formSchemas } from "../schemas";
import JsonContext from "../Context/JsonContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const { users } = useContext(JsonContext);
  const navigate = useNavigate();

  const onSubmit = (values) => {
    if (
      users[0].email === values.email &&
      users[0].password === values.password
    ) {
      Swal.fire({
        icon: "success",
        text: "Giriş başarılı. Yönlendiriliyor...",
        timer: 2000,
      });
      setTimeout(() => {
        navigate("/admin");
      }, 2000);
    } else {
      Swal.fire({
        icon: "warning",
        text: "E-mail veya şifre hatalı",
        timer: 2000,
      });
    }
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit,
    validationSchema: formSchemas,
  });

  return (
    <div className="flex flex-col justify-center h-screen items-center gap-10">
      <div></div>
      {/* content div */}
      <div className="p-10">
        {/* logo */}
        <div className="mx-auto w-36 h-36 bg-gray-200 rounded-full"></div>
        {/* form area */}
        <form className="p-7 container max-w-sm" onSubmit={handleSubmit}>
          <div className="w-56 mb-6">
            <div>
              <label
                className="block text-gray-500 font-bold mb-1"
                htmlFor="email"
              >
                E-mail
              </label>
            </div>
            <div>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-700"
                id="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
              />
              {errors.email && <p className="text-amber-900">{errors.email}</p>}
            </div>
          </div>
          <div className="mb-6 w-56">
            <div>
              <label
                className="block text-gray-500 font-bold mb-1 "
                htmlFor="password"
              >
                Şifre
              </label>
            </div>
            <div>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-700"
                id="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                placeholder="******************"
              />
              {errors.password && (
                <p className="text-amber-900">{errors.password}</p>
              )}
            </div>
          </div>
          <div className="w-56 mb-1">
            <div className="">
              <button
                className="shadow bg-amber-700 hover:bg-amber-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
                type="submit"
              >
                Giriş Yap
              </button>
            </div>
          </div>
          <div className="w-56">
            <div className="">
              <Link to={"/"}>
                <button className="shadow bg-gray-400 hover:bg-gray-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full">
                  <i class="fa-solid fa-arrow-left"></i>
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
