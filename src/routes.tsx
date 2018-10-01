import * as React from "react";
import { Route } from "react-router";
import { BrowserRouter, Switch } from "react-router-dom";
import About from "./app/components/about/About";
import Appsource from "./app/components/appsource/appsource";
import Home from "./app/components/home/HomPage";
import PartnerRouter from "./app/components/partners/routes";
import App from "./app/App";

const AppRouter: React.StatelessComponent<{}> = () => {

  return (
    <BrowserRouter>
      <div>
        <Route component={App} path="/" />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/partners" component={PartnerRouter} />
          <Route path="/appsource" component={Appsource} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>

  );
};

export default AppRouter;
