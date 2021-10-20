import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../Context/AuthProvider';
import About from '../About Us/About';
import Apoint from '../Appoint/Apoint';
import Doctors from '../Doctors/Doctors';
import GetInTouch from '../GetInTouch/GetInTouch';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Navber from '../Navber/Navber';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Services from '../Services/Services';

const Header = () => {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <Navber></Navber>
                    <Switch>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                        <Route exact path='/home'>
                            <Home></Home>
                        </Route>
                        <Route exact path='/about'>
                            <About></About>
                        </Route>
                        <Route exact path='/services'>
                            <Services></Services>
                        </Route>
                        <Route exact path='/doctors'>
                            <Doctors></Doctors>
                        </Route>
                        <Route exact path='/getInTouch'>
                            <GetInTouch></GetInTouch>
                        </Route>
                        <Route exact path='/login'>
                            <Login></Login>
                        </Route>
                        <Route exact path='/register'>
                            <Register></Register>
                        </Route>
                        <Route exact path='/apoint'>
                            <Apoint></Apoint>
                        </Route>
                        <Route path='/*'>
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
};

export default Header;