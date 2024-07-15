import React, { useContext, useState } from "react";
import JsonContext from "../Context/JsonContext";
import CategoriesAdd from "../Pages/CategoriesAdd";

const CategoriesItems = ({ category }) => {
  const [edit, setEdit] = useState(false);
  const { deleteCategories, editCategory } = useContext(JsonContext);

  const deleteItem = () => {
    deleteCategories(category.id);
  };

  const updatedItem = () => {
    setEdit(!edit);
  };

  const submitItem = (id, name) => {
    editCategory(id, name);
    setEdit(false);
  };

  return (
    <>
      {edit ? (
        <tr>
          <td>
            <CategoriesAdd
              category={category}
              categoryUpdate={edit}
              onUpdate={submitItem}
            />
          </td>
        </tr>
      ) : (
        <tr>
          <td className="p-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="font-medium text-gray-800">{category.id}</div>
            </div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="text-left font-bold text-green-500">{category.name}</div>
          </td>
          <td className="p-2 whitespace-nowrap">
            <div className="flex gap-6 font-bold text-center items-center justify-center">
              <div className="bg-gray-600 text-white p-2 rounded" onClick={updatedItem}>
                <i className="fa-solid fa-pen"></i>
              </div>
              <div className="bg-red-600 text-white p-2 rounded" onClick={deleteItem}>
                <i className="fa-solid fa-trash"></i>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default CategoriesItems;
