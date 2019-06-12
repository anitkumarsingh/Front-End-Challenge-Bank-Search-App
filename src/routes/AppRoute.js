import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BankDetails from '../pages/BankDetails';
import Home from '../pages/Home';

class  AppRoutes extends React.Component{
    render(){
        const { match } = this.props;
            return(
                <Switch>
                    <Route path={`${match.path}home`} component={Home}/>
                    <Route path={`${match.path}bank/:id`} component={BankDetails}/>
                </Switch>
            )
        }
}
export default AppRoutes;