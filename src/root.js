import React from 'react';
import {connect} from 'react-redux'
import {login,logout,initAuth} from './reducer/Auth.redux'
import { withRouter } from 'react-router-dom';
import Root1 from './root1'
import Root2 from './root2'
import './css/common.css'
class App extends React.Component {
  componentWillMount(){
    console.log('111');
    console.log(this.props);
    
    this.props.initAuth()
  }
  render() {
    let root=this.props.isAuth?<Root2></Root2>:<Root1></Root1>
    return (
      <React.Fragment>
        {root}
      </React.Fragment>
    );
  }
}
const mapStatetoProps=(state)=>{
  return state.auth
}
const actionCreators={login,logout,initAuth}
App=withRouter(connect(mapStatetoProps, actionCreators)(App))
export default App
