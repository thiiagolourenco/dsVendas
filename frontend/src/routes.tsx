import HomeLayout from "pages/Home/home-layout";
import DashboardLayout from "pages/Dashboard/dashboard-layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomeLayout />
        </Route>
        <Route path="/dashboard">
          <DashboardLayout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
