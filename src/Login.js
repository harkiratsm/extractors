import React, { useEffect,useContext } from 'react'
import Sawo from 'sawo'
import { useHistory } from 'react-router';
import { LoginContext } from './App'
import './css/Login.css'
import {sawokey} from './utils/key'
const LoginPage = () => {
    const history=useHistory();
    const {setLogin}=useContext(LoginContext)
    useEffect(() => {
        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: 'sawo-container',
            // can be one of 'email' or 'phone_number_sms'
            identifierType: 'phone_number_sms',
            // Add the API key copied from 5th step
            apiKey: sawokey,
            // Add a callback here to handle the payload sent by sdk
            onSuccess: payload => {
                // you can use this payload for your purpose
               
               setLogin(true)
               history.push("/")
            },
        }
        let sawo = new Sawo(config)
        sawo.showForm()
    }, [setLogin,history])
    
    return (
        <div className="login">
            <div>
                <div id="sawo-container" style={{height: "300px", width: '300px'}}></div>
            </div>
        </div>
    )
}

export default LoginPage