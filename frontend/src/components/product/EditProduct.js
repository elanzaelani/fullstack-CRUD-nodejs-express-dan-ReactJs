import axios from 'axios';
import {useState , useEffect} from 'react';
import { useNavigate ,useParams} from 'react-router-dom';

const EditProduct = () => {

    const [title,setTitle ]=useState('');
    const [price,setPrice]= useState(""); 
    const navigate =useNavigate();
    const {id}= useParams();

    const updateProduct= async(ev)=>{
        ev.preventDefault(); //preventdefault utk agar ketika submit pagenya tidak reload
        await axios.patch(`http://localhost:5001/products/${id}`,{
            title :title,
            price:price
        }) ;
        navigate("/")//di direct pake navigate ke home
    }

    useEffect(()=>{
        getProductByid();
    },[])

    const getProductByid=async()=>{
        const response=await axios.get(`http://localhost:5001/products/${id}`);
        setTitle(response.data.title);
        setPrice(response.data.price);

    }

    return (
        <div>
          
            <form onSubmit={updateProduct}>
                <div className="field">
                    <label className="label">Title</label>
                    <input 
                            className="input" 
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(ev)=>setTitle(ev.target.value)}
                            />
                </div>

                <div className="field">
                    <label className="label">Price</label>
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="Price"
                        value={price}
                        onChange={(ev)=>setPrice(ev.target.value)}
                        />
                </div>
                

                <div className="field">
                    <button className="button is-primary">Update</button>

                 
                </div>
            </form>
        </div>
    )
}

export default EditProduct
