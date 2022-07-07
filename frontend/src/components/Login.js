import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [email , setEmail]=useState("");
    const [password , setPassword]=useState("");
    const [msg ,setMsg] =useState('');
    const navigate =useNavigate();

    const Auth = async(ev) =>{
        ev.preventDefault();
        try {
            await axios.post('http://localhost:5001/users/login',{
                email:email,
                password:password,
            });
            navigate("dashboard")
        
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
            
        }

    }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Auth} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <div className="label">Email or Username
                                        <div className="controls">
                                            <input type="text" className="input" placeholder="Email or Username"
                                            value={email}onChange={(e)=>setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <div className="label">Password
                                        <div className="controls">
                                            <input type="password" className="input" placeholder="********"
                                             value={password}onChange={(e)=>setPassword(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Login</button>
                                </div>
                            </form>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default Login
