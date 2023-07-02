import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";
import ResetPassword from "./pages/ResetPassword";
import Activate from "./pages/Activate";

import Layout from "./hocs/Layout";
import { Provider } from "react-redux";
import store from './store';

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/reset_password' element={<ResetPassword />} />
                    <Route path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
                    <Route path='/activate/:uid/:token' element={<Activate />} />
                </Routes> 
            </Layout>
        </Router>
    </Provider>
    
);

export default App;
