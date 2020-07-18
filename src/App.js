import React from "react";
import "./styles.scss";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./containers/Home";
import PageComponent from "./containers/PageComponent";
import Article from "./components/Article";

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/market-talk/category/:slug"
            component={PageComponent}
          />
          <Route exact path="/market-talk/:slug" component={Article} />
          <Route path="/market-talk/" component={Home} />
          <Route exact path="*" component={Home} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading.requestsInProgress.length === 0 ? false : true,
  };
};

export default connect(mapStateToProps, null)(App);
