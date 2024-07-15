import "./App.css";
import { useContext, useEffect} from "react";
import JsonContext from "./Context/JsonContext";
import Url from "./Routes/Url";
function App() {
  
  const {fetchUsers,fetchCoffies,fetchCategories} = useContext(JsonContext)
  

  useEffect(() => {
    fetchUsers()
    fetchCoffies()
    fetchCategories()
  }, [fetchCoffies,fetchCategories]);

  return (
    <>
      <Url/>
    </>
  );
}

export default App;
