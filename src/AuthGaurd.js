import React ,{useContext} from 'react'
import { Redirect } from 'react-router'
import {LoginContext} from "./App"
function AuthGaurd({children}) {
    const {login} = useContext(LoginContext)
    if(login===false) {
        return (
            <Redirect to='/login'/>
        )
    }
    else {
        return (
            children
        )
    }
}

export default AuthGaurd
