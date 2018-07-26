import React from "react";
import { Route, Switch ,Redirect} from "react-router-dom";
import login from './pages/login';
export default class jspang extends React.Component {
  render() {
    return (
        <div>
          <Switch>
            <Route exact path="/" component={login} />
            <Route exact path="/login" component={login} />
            <Redirect to='/' />
          </Switch>
        </div>
    );
  }
}
