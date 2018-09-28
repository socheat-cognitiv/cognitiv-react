import React from "react";
import { Router, Switch, Route } from 'react-router-dom';
import history from '../resources/js/cognitiv.history';
import LoginWrapper from '../components/login/LoginWrapper';
import PublicNoMatch from '../components/common/PublicNoMatch';
import NavigationPublic from '../components/common/NavigationPublic';
import FooterPublic from '../components/common/FooterPublic';
import AxiosLoader from '../components/common/AxiosLoader';

const PublicLayout = () => {
    return(
        <Router history={history}>
            <div className="container-fluid cogn-body">
                <NavigationPublic />
                <div className="row cogn-content">
                    <Switch>
                        <Route exact path="/login"  component={LoginWrapper}/>
                        <Route component={PublicNoMatch} />
                    </Switch>
                </div>
                <FooterPublic />
                <AxiosLoader/>
            </div>
        </Router>
    )
}
export default PublicLayout;