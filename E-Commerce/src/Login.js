import React, {useState} from "react";
import './login.css'
import Validation from "./Validation";

const Login = (props) =>{

    const [values, setValues] = useState({
        email : "",
        password : ""
    })
    const [errors, setErros]=useState({})

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setValues({...values, [name]:value})
    
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setErros(Validation(values))
        setValues({email : "", password : ""});
    }
    

    return(
        <div className="login-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <label className="email"> Email</label>
                    <input type= "text"  name ="email" value={values.email} onChange={handleChange} />
                    {errors.email && <p className="error"> {errors.email}</p>}
                </div>
                <div>
                    <label className="password"> Password</label>
                    <input type= "password"  name ="password" value={values.password} onChange={handleChange}/>
                    {errors.password && <p className="error"> {errors.password}</p>}
                </div>
                <button type = "submit"> Login</button>
            </form>

        </div>

    )
}
export default Login;