import * as React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import About from "./app/components/about/AboutPage";
import Home from "./app/components/home/HomPage";
import PartnerRouter from "./app/components/partners/routes";

const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path='/partners' component={PartnerRouter} />
        <Route path="/about" component={About} />
      </Switch>
    </div>

  );
}

export default AppRouter;
