
import React from 'react';
import {connect} from 'react-redux'
import {login,logout} from './../reducer/Auth.redux'
import { Redirect } from "react-router-dom";
class Auth extends React.Component{
    login(){
        this.props.login({name:'11',typed:'main',data:1})
        console.log(this.props);
        
    }
    render(){
        return(
            <div>
            {this.props.auth.isAuth?<Redirect to='/dashboard'></Redirect>:null}
                <div>登录页面</div>
                <button onClick={()=>this.login()}>登录</button>
            </div>
        );
    }
}
const mapStatetoProps=(state)=>{
  return {auth:state}
}
const actionCreators={login,logout}
Auth=connect(mapStatetoProps,actionCreators)(Auth)
export default Auth