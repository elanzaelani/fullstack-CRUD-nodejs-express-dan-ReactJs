import React ,{useState}from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


const Register = () => {
    const [name , setName]=useState("");
    const [email , setEmail]=useState("");
    const [password , setPassword]=useState("");
    const [confPassword , setConfPassword]=useState("");
    const [msg ,setMsg] =useState('');
    const navigate =useNavigate();


    const Register = async(ev) =>{
        ev.preventDefault();
        try {
            await axios.post('http://localhost:5001/user',{
                name: name,
                email:email,
                password:password,
                confPassword:confPassword
            });
            navigate("/")
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
                            <form onSubmit={Register} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <div className="label">Name
                                        <div className="controls">
                                            <input type="text" className="input" placeholder="Name" 
                                            value={name} onChange={(ev)=>setName(ev.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <div className="label">Email
                                        <div className="controls">
                                            <input type="text" className="input" placeholder="Email"
                                            value={email} onChange={(ev)=>setEmail(ev.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <div className="label">Password
                                        <div className="controls">
                                            <input type="password" className="input" placeholder="********"
                                            value={password} onChange={(ev)=>setPassword(ev.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <div className="label">Confirm Password
                                        <div className="controls">
                                            <input type="password" className="input" placeholder="********" 
                                            value={confPassword} onChange={(ev)=>setConfPassword(ev.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Register</button>
                                </div>
                            </form>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default Register
