import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { createRoot } from "react-dom/client"; // Thay đổi import ở đây
import { Provider, connect } from "react-redux";
import store from "./redux/store";
import { Component, Fragment } from "react";
import firebase from "./firebase";
import App from "./components/App";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { clearUser, setUser } from "./redux/users/userAction";
import Spinner from "./components/UI/Spinner";

class Root extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.history.push("/");
        this.props.setUser(user);
      } else {
        this.props.history.push("/login");
        this.props.clearUser();
      }
    });
  }
  render() {
    const { loading } = this.props;
    return (
      <Fragment>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ users: { loading } }) => ({
  loading: loading,
});
const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  clearUser: () => dispatch(clearUser()),
});
const RootWithAuth = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Root)
);

const root = document.getElementById("root");
const rootElement = (
  <Provider store={store}>
    <BrowserRouter>
      <RootWithAuth />
    </BrowserRouter>
  </Provider>
);
const rootContainer = createRoot(root); // Thay đổi tại đây
rootContainer.render(rootElement);

reportWebVitals();
