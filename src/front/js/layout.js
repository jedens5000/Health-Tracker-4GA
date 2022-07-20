import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import FormSignup from "./pages/FormSignup";
import { Login } from "./pages/Login";
import { StatusUpdate } from "./pages/StatusUpdate";
import { Main } from "./pages/main";
import Charts from "./pages/Charts";
import App from "./pages/Reminders";
// import Medications from "./pages/medications";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <FormSignup />
            </Route>
            <Route exact path="/statusupdate">
              <StatusUpdate />
            </Route>
            <Route exact path="/charts">
              <Charts />
            </Route>
            <Route exact path="/chartsarea1">
              <Charts />
            </Route>
            <Route exact path="/chartsbar">
              <Charts />
            </Route>
            <Route exact path="/chartsline">
              <Charts />
            </Route>
            <Route exact path="/main">
              <Main />
            </Route>
            <Route exact path="/Reminders">
              <App />
            </Route>
            {/* <Route exact path="/medications">
              <Medications />
            </Route> */}
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
