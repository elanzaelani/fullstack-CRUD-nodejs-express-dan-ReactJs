import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const [title,setTitle ]=useState('');
    const [price,setPrice]= useState(""); 
    const navigate =useNavigate();

    const saveProduct= async(ev)=>{
        ev.preventDefault(); //preventdefault utk agar ketika submit pagenya tidak reload
        await axios.post("http://localhost:5001/products",{
            title : title,
            price:price
        }) ;
        navigate("/")//di direct pake navigate ke home
    }

    return (
        <div>
          
            <form onSubmit={saveProduct}>
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
                    <button className="button is-primary">Save</button>

                    {title}-{price}
                </div>
            </form>
        </div>
    )
}

export default AddProduct
