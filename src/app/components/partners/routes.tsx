import * as React from "react";
import { Route, Switch } from "react-router";
import PartnerDetail from "./manage/partnerDetail";
import Partners from "./manage/partners";


const PartnerRouter = () => (
    <Switch>
        <Route path='/' component={Partners} />
        <Route path='/add' component={PartnerDetail} />
        <Route path='/edit/:id' component={PartnerDetail} />
    </Switch>
)

export default PartnerRouter;
