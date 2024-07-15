import React from "react";
import { Routes,Route } from "react-router";
import Login from "../Pages/Login";
import Admin from "../Pages/Admin";
import Coffies from "../Pages/Coffies";
import Categories from "../Pages/Categories";
import CoffiesAdd from "../Pages/CoffiesAdd";
import CategoriesAdd from "../Pages/CategoriesAdd";
import HomePage from "../Pages/HomePage";

const Url = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/admin" element={<Admin />}>
          <Route path="kahveler">
            <Route path="liste" element={<Coffies />}></Route>
            <Route path="ekle" element={<CoffiesAdd />}></Route>
          </Route>
          <Route path="kategoriler">
            <Route path="liste" element={<Categories />}></Route>
            <Route path="ekle" element={<CategoriesAdd />}></Route>
          </Route>
        </Route>
      </Routes>
  );
};

export default Url;
