import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import About from '../About Us/About';
import Home from '../Home/Home';
import Navber from '../Navber/Navber';
import NotFound from '../NotFound/NotFound';

const Header = () => {
    return (
        <div>
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
                    <Route path='/*'>
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Header;