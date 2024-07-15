import { useFormik } from "formik";
import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import JsonContext from "../Context/JsonContext";

const CategoriesAdd = ({ category,categoryUpdate,onUpdate }) => {
  const { addCategory } = useContext(JsonContext);

  const onSubmit = (values) => {
    if(categoryUpdate){
    onUpdate(category.id,values.name)
    }else{
    toast.success("Eklendi", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    addCategory(values.name);

    }
    values.name = "";
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: category ? category.name : "",
    },
    onSubmit,
  });

  return (
    <>
      <header className="px-5 py-4 border-b mb-5 border-gray-100">
        <h2 className="font-semibold text-gray-800">Categories Add </h2>
      </header>
      {/* form area */}
      <form onSubmit={handleSubmit}>
        <div className="w-full mb-6">
          <div>
            <label
              className="block text-gray-500 font-bold mb-1"
              htmlFor="title"
            >
              Başlık
            </label>
          </div>
          <div>
            <input
              className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-700"
              id="name"
              type="text"
              placeholder="Başlık"
              value={values.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full">
          <div>
            <button
              className="shadow bg-amber-700 hover:bg-amber-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
              type="submit"
            >
              Ekle
            </button>
          </div>
        </div>
      </form>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default CategoriesAdd;
