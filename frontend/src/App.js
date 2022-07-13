
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ProductList from "./components/product/ProductList";

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="products"element={<ProductList />}/>
        </Routes>

        
      </BrowserRouter>
    </div>


  

  );
}

export default App;
