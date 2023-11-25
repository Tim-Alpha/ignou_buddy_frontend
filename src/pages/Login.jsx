import React, { useState } from 'react'
import BuddyLogo from '../components/BuddyLogo'
import CustomInput from '../components/CustomInput'


const Login = () => {
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="signin-container">
            <div className="row">
                <div className="col-md-6">
                    <div className="signin-form">
                        <h1>Login </h1>
                        <CustomInput 
                            label={"Mobile Number"}
                            type={"tel"}
                            className={"form-control"}
                            placeholder={"Enter your number"}
                            value={number}
                            onChange={(e)=> setNumber(e.target.value)}
                        />
                        <CustomInput 
                                label={"Password"}
                                type={"password"}
                                className={"form-control"}
                                placeholder={"Enter your Password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className=' mt-2 btn btn-primary m-2'>Login</button>
                        <button className=' mt-2 btn btn-primary px-2 m-2 '> Forget Password</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="login-image">
                        <BuddyLogo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
