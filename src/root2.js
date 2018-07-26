import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/nav";
import Jspang from "./pages/jsping";
import Jspangb from "./pages/jspingb";
import Jspangc from "./pages/jspingc";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default class jspang extends React.Component {
  componentWillMount() {
    console.log("root2");
  }
  render() {
    return (
      <div className="page">
        <Header></Header>
        <div className="conter">
          <div className="container">
            <Nav />
            <Switch>
              <Route exact path="/" component={Jspang} />
              <Route path="/Jspangb" component={Jspangb} />
              <Route path="/Jspangc" component={Jspangc} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
