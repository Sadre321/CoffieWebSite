import { useFormik } from "formik";
import React, { useContext } from "react";
import { blogSchemas } from "../schemas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JsonContext from "../Context/JsonContext";

const CoffiesAdd = ({coffie,coffieUpdate,onUpdate}) => {
  const { addCoffies, categories } = useContext(JsonContext);

  const onSubmit = (values) => {

    const img = values.photo.split("\\")[2]
    
    if(coffieUpdate){
      onUpdate(coffie.id,values.name,img,values.category)
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
        
        addCoffies(values.name, img, values.category);

        }
        values.category = "";
        values.name = "";
        values.photo = "";
  };

  const { errors, values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name:coffie?coffie.name:"",
      photo: "",
      category: coffie?coffie.category_id:"",
    },
    onSubmit,
    validationSchema: blogSchemas,
  });
  return (
    <>
      <header className="px-5 py-4 border-b mb-5 border-gray-100">
        <h2 className="font-semibold text-gray-800">Coffie Add </h2>
      </header>
      {/* form area */}
      <form onSubmit={handleSubmit}>
        <div className="w-full mb-6">
          <div>
            <label
              className="block text-gray-500 font-bold mb-1"
              htmlFor="category"
            >
              Kategori
            </label>
          </div>
          <div className="relative inline-block w-full text-gray-700">
            <select
              className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-700"
              id="category"
              placeholder="Lütfen Kategori Seçiniz"
              value={values.category}
              onChange={handleChange}
            >
              <option value="">Lütfen Kategori Seçiniz</option>
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          {errors.category && <p className="text-amber-900">{errors.category}</p>}
        </div>

        <div className="w-full mb-6">
          <div>
            <label
              className="block text-gray-500 font-bold mb-1"
              htmlFor="name"
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
            {errors.name && <p className="text-amber-900">{errors.name}</p>}
          </div>
        </div>

        <div className="w-full mb-6">
          <div>
            <label
              className="block text-gray-500 font-bold mb-1"
              htmlFor="photo"
            >
              Fotoğraflar
            </label>
          </div>
          <div>
            <input
              className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-amber-700"
              id="photo"
              type="file"
              value={values.photo}
              onChange={handleChange}
            />
            {errors.photo && <p className="text-amber-900">{errors.photo}</p>}
          </div>
        </div>

        <div className="w-56">
          <div>
            <button
              className="shadow bg-amber-700 hover:bg-amber-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full"
              type="submit"
            >
              {coffieUpdate?"Güncelle":"Ekle"}
            </button>
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
          </div>
        </div>
      </form>
    </>
  );
};
export default CoffiesAdd;
