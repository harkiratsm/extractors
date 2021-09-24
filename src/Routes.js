import React from 'react'
import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";
import AuthGaurd from './AuthGaurd';
import LoginPage from './Login';
import Main from './components/Main';



function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/extractors/login" exact>
                    <LoginPage />
                </Route>
                <Route path="/extractors" exact>
                    <AuthGaurd>
                        <Main />
                    </AuthGaurd>    
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes

