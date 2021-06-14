import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import getUserAuth from "./actions";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
