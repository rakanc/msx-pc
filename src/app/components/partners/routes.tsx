import * as React from "react";
import { Route, Switch } from "react-router";
import PartnerDetail from "./manage/details";
import Partners from "./manage/partners";


const PartnerRouter = () => (
    <Switch>
        <Route exact={true} path='/partners' component={Partners} />
        <Route path='partners/:id' component={PartnerDetail} />
    </Switch>
)

export default PartnerRouter;
