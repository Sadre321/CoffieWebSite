import axios from "axios";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const JsonContext = createContext();

const Provider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [coffies, setCoffies] = useState([]);
  const [categories, setCategories] = useState([]);

  // users

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:8080/users");
    setUsers(response.data);
  };

  // coffies

  const fetchCoffies = async () => {
    const response = await axios.get("http://localhost:8080/coffies");
    setCoffies(response.data);
  };

  const deleteCoffies = async (id) => {
    await axios.delete(`http://localhost:8080/coffies/${id}`);
    const newCoffies = coffies.filter((coffie) => {
      return coffie.id !== id;
    });

    setCoffies(newCoffies);
  };

  const addCoffies = async (name, img, category_id) => {
    const response = await axios.post("http://localhost:8080/coffies", {
      id: uuidv4(),
      name,
      img,
      category_id,
    });
    const createdCoffie = [...coffies, response.data];
    setCoffies(createdCoffie);
  };

  const editCoffie = async (id, name, img, category_id) => {
    axios.put(`http://localhost:8080/coffies/${id}`, {
      id,
      name,
      img,
      category_id,
    }).catch((e) => {
      console.log(e)
    })

    const afterUpdatedCoffies = coffies.map((coffie) => {
      if (coffie.id === id) {
        coffie.id = id;
        coffie.name = name;
        coffie.img = img;
        coffie.category_id = category_id
      }
      return coffie
    });

    setCoffies(afterUpdatedCoffies)
  };

  // categories

  const fetchCategories = async () => {
    const response = await axios.get("http://localhost:8080/categories");
    setCategories(response.data);
  };

  const deleteCategories = async (id) => {
    await axios.delete(`http://localhost:8080/categories/${id}`);
    const newCategories = categories.filter((category) => {
      return category.id !== id;
    });

    setCategories(newCategories)
  };

  const addCategory = async (name) => {
    const response = await axios.post("http://localhost:8080/categories", {
      id: uuidv4(),
      name,
    });
    const createdCategories= [...categories, response.data];
    setCategories(createdCategories);
  };

  const editCategory = async (id, name) => {
    axios.put(`http://localhost:8080/categories/${id}`, {
      id,
      name,
    }).catch((e) => {
      console.log(e)
    })

    const afterUpdatedCategories = categories.map((category) => {
      if (category.id === id) {
        category.id = id;
        category.name = name;
      }
      return category
    });

    setCategories(afterUpdatedCategories)
  };


  const values = {
    categories,
    users,
    coffies,
    fetchCategories,
    fetchCoffies,
    fetchUsers,
    addCoffies,
    addCategory,
    editCoffie,
    editCategory,
    deleteCoffies,
    deleteCategories,
  };

  return (
    <>
      <JsonContext.Provider value={values}>{children}</JsonContext.Provider>
    </>
  );
};

export { Provider };
export default JsonContext;
