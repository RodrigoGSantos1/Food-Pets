import { Switch, Route } from "react-router-dom";

import Home from '../pages/Home/index'
import Register from '../pages/Register/index'
import Login from '../pages/Login/index'
import Painel from '../pages/Painel/index'

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/painel" exact component={Painel} />
        </Switch>
    );
}