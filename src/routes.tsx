import * as React from "react";
import { Route } from "react-router";
import { BrowserRouter, Switch } from "react-router-dom";
import App from "./app/App";
import About from "./app/components/about/AboutPage";
import Home from "./app/components/home/HomPage";
import PartnerRouter from "./app/components/partners/routes";

const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div>
      <Route component={App} />
       <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path='/partners' component={PartnerRouter} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
