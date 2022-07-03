import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';

import ProductList from './components/product/ProductList';
import AddProduct from './components/product/AddProduct';
import EditProduct from './components/product/EditProduct';
import Login from '../src/components/Login'
import Register from '../src/components/Register'
import Dashboard  from './components/Dashboard';


function App() {
  return (
    <Router>
    {/* <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter"> */}
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      {/* <Route path="/" element={<ProductList />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} /> */}
      </Routes>
      
      

        
      {/* </div>
      </div>
    </div> */}
    </Router>
  );
}

export default App;
