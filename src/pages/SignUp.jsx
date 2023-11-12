import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import BuddyLogo from '../components/BuddyLogo';



const SignUp = () => {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');
    const [enrollNo,setEnrollNo] = useState('');
    const [password,setPassword] = useState('');
    return (
        <div className="signup-container">
            <div className="row">
                <div className="col-md-6">
                    <div className="login-image">
                    <BuddyLogo/>
                        
                        
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="signup-form">
                        <h1>Sign Up</h1>
                        <CustomInput 
                            label={"Name"}
                            type={"text"}
                            className={"form-control"}
                            placeholder={"Enter your name"}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        
                        <CustomInput 
                            label={"Email"}
                            type={"text"}
                            className={"form-control"}
                            placeholder={"Enter your email"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        
                        <CustomInput 
                            label={"Mobile number"}
                            type={"tel"}
                            className={"form-control"}
                            placeholder={"Enter your mobile number"}
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                       
                        <CustomInput 
                            label={"Enrollment"}
                            type={"text"}
                            className={"form-control"}
                            placeholder={"Enter your Enrollment"}
                            value={enrollNo}
                            onChange={(e) => setEnrollNo(e.target.value)}
                        />
                       
                        <CustomInput 
                            label={"Password"}
                            type={"password"}
                            className={"form-control"}
                            placeholder={"Enter your Enrollment"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        
                        <button className=" mt-2 btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp