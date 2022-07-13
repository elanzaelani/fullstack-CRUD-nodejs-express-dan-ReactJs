import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ProductList = () => {

    const [products,setProduct] = useState([]);

    useEffect(()=>{
       
        getProducts();
    },[]);

    //fuction get product
    const getProducts = async ()=>{
        const response =await axios.get('http://localhost:5001/products');
        setProduct(response.data);
    }

    //function delete Product
    const deleteProduct=async(id)=>{
       
        await axios.delete(`http://localhost:5001/products/${id}`);
        getProducts();
        
    }

    return (
        <div>
           .<div className="container">
           <Link to="/add"className="button is-primary mt-5">Add New</Link>
            <table className="table is-striped">
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product,index)=>(
                    <tr key={product.id}>
                        <td>{index +1}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>
                            <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>
                            <button onClick={()=>deleteProduct(product.id)} className="button is-small is-danger">Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>

           </div>
        </div>
    )
}

export default ProductList
