import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import * as selectors from './redux/reducer';

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(actions.getBankData('bangalore'));
    }
    render(){
        const { users } = this.props;
        console.log(users);
        return(
            <div>Hello from home page</div>
        )
  }
}
function mapStateToProps(state) {
    return selectors.getAllValues(state);
  }
export default connect(mapStateToProps)(Home);