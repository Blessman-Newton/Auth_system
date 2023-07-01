import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";
import ResetPassword from "./pages/ResetPassword";
import Activate from "./pages/Activate";

import Layout from "./hocs/Layout";


const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/resetpassword' component={ResetPassword} />
                <Route exact path='/resetpasswordconfirm' component={ResetPasswordConfirm} />
                <Route exact path='/activate' component={Activate} />
            </Switch> 
        </Layout>
    </Router>
);

export default App;
