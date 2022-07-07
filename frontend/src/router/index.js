import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'
import ProductList from '../components/product/ProductList'
import AddProduct from '../components/product/AddProduct'
import Navbar from '../components/Navbar'
import NotFound from '../components/NotFound'
import Register from '../components/Register'
import ProtectedRoute from './ProtectedRoute'

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
         <Route element={<Navbar />}>
            <Route path="/" element={<ProtectedRoute> <Dashboard/></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            {/* <Route
                path="/protected"element={
                <RequireAuth>
                    <ProtectedPage />
                </RequireAuth>
                }
            /> */}
        </Route>
      </Routes>
        </BrowserRouter>

            
    )
}

export default Router
