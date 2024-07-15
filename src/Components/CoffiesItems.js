import React, { useContext, useState } from "react";
import JsonContext from "../Context/JsonContext";
import CoffiesAdd from "../Pages/CoffiesAdd";

const CoffiesItems = ({ coffie }) => {
  const [edit, setEdit] = useState(false);
  const { categories, deleteCoffies, editCoffie } = useContext(JsonContext);

  const deleteItem = () => {
    deleteCoffies(coffie.id);
  };

  const updatedItem = () => {
    setEdit(!edit);
  };

  const submitItem = (id, name, img, category_id) => {
    editCoffie(id, name, img, category_id);
    setEdit(false);
  };

  return (
    <>
      {edit ? (
        <tr>
          <td>
            <CoffiesAdd
              coffie={coffie}
              coffieUpdate={edit}
              onUpdate={submitItem}
            />
          </td>
        </tr>
      ) : (
        <tr>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="font-medium text-gray-800">{coffie.id}</div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="font-medium text-left text-gray">
                {coffie.name}
              </div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left  font-bold text-green-500">
              {categories.length>0?categories.map((c) => {
                if (c.id === coffie.category_id) {
                  return c.name;
                }
              }):<p>Ulaşılamıyor</p>}
            </div>
          </td>

          <td className="p-2 whitespace-nowrap">
            <div className="flex gap-2 font-bold text-center items-center justify-end">
              <button
                className="bg-gray-600 text-white p-2 rounded"
                onClick={updatedItem}
              >
                <i className="fa-solid fa-pen"></i>
              </button>
              <button
                className="bg-red-600 text-white p-2 rounded"
                onClick={deleteItem}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default CoffiesItems;
