import React, {useEffect, useState} from "react";
import './registration.scss';
import Validation from "./Validation";

const Registration = (props) =>{
    const [values, setValues] = useState({
        valuesname : "",
        email : "",
        password : "",
        rePassword : "",
        
    })

    const [errors, setErros]=useState({})
    const [validData, setValidData]=useState(false)
    // const [allRecord, setAllRecord] = useState([])

    const handleChange = (e) =>{
        const {name, value} = e.target;
        console.log(name, value)
        setValues({...values, [name]:value})

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErros(Validation(values));
        setValidData(true);
        setValues({username:"", email : "", password : "", rePassword:""});

        // const newvalues = {...values, id : new Date().getTime.toString()}
        // setAllRecord([...allRecord, newvalues])
    }

    useEffect(()=>{
        if(Object.keys(errors).length === 0 && validData){
            alert("Account Created!!")
            
        }
    },[errors])

    return(
        <>
            <div className="container">
                <div className="left">
                    <h3>MARKET</h3>
                    <div className="welcome">
                        <h1>Welcome!</h1>
                        <p>Login with your info</p>
                        <button type="submit" onClick={() => props.onFormSwitch('login')}>SIGN IN</button>
                    </div>
                </div>
                <div className="right">
                    <h1>Create Account</h1>
                    <p>Use your email id for registration</p>
                    <form className="form">
                        <div>
                            <input type= "text"  name ="username" value={values.username} onChange={handleChange}  placeholder="Name"/>
                            {errors.username && <p className="error"> {errors.username}</p>}
                        </div>
                        <div>
                            <input type= "email"  name ="email" value={values.email} onChange={handleChange} placeholder="Email"/>
                            {errors.email && <p className="error"> {errors.email}</p>}
                        </div>
                        <div>
                            <input type= "password"  name ="password" value={values.password} onChange={handleChange}  placeholder="Password" />
                            {errors.password && <p className="error"> {errors.password}</p>}
                        </div>
                        <div>
                            <input type= "password"  name ="rePassword" value={values.rePassword} onChange={handleChange}  placeholder="Confirm Password"/>
                            {errors.rePassword && <p className="error"> {errors.rePassword}</p>}
                        </div>
                    </form>
                    <div className="btn">
                        <button type="submit" onClick={handleSubmit}>SIGN UP</button>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Registration;