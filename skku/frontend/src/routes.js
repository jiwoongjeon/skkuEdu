import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import About_Members from "./views/About_Members";
import KNSSE from "./views/KNSSE";
import LogIn from "./views/LogIn/index";
import PostNewQuestion from "./views/PostNewQuestion";
import DetailBoard from "./components/DetailBoard";
import DownloadBoard from "./components/DownloadBoard";
import DetailPost from "./components/DetailPost";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <Home /> },
  { path: "/k-nsse", key: "K-NSSE", component: () => <KNSSE /> },
  { path: "/about/members", key: "members", component : () => <About_Members/>},
  { path: "/about", key: "ABOUT", component: () => <About /> },
  { path: "/Newpost", key: "NEWPOST", component: () => <PostNewQuestion /> },
  { path: "/board/detail", key: "DETAIL", component: () => <DetailBoard /> },
  { path: "/board/download", key: "DOWNLOAD", component: () => <DownloadBoard /> },
  { path: "/login", key: "LOGIN", component: () => <LogIn /> },
  { path: "/postdetail", key: "POST", component: () => <DetailPost /> }
];

export default ROUTES;

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}
