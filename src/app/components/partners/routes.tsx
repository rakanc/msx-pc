import * as React from "react";
import { Route, Switch } from "react-router";
import PartnerDetail from './containers/partnerDetail';
import Partners from './containers/partners';



const PartnerRouter = () => (
  <Switch>
    <Route exact={true} path='/partners' component={Partners} />
    <Route path='/partners/add' component={PartnerDetail} />
    <Route path='/partners/edit/:id' component={PartnerDetail} />
  </Switch>
)

export default PartnerRouter;
