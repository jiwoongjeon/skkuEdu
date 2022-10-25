import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import About_Members from "./views/About_Members";
import KNSSE from "./views/KNSSE";
import Board1 from "./components/Board1"
import Board2 from "./components/Board2"
import LogIn from "./views/LogIn/index";
import PostNewQuestion from "./views/PostNewQuestion";


const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <Home /> },
  { path: "/k-nsse", key: "K-NSSE", component: () => <KNSSE /> },
  { path: "/about/members", key: "members", component : () => <About_Members/>},
  { path: "/about", key: "ABOUT", component: () => <About /> },
  { path: "/board/Newpost", key: "NEWPOST", component: () => <PostNewQuestion /> },
  { path: "/board1", key: "BOARD1", component: () => <Board1 /> },
  { path: "/board2", key: "BOARD2", component: () => <Board2 /> },
  { path: "/login", key: "LOGIN", component: () => <LogIn /> },
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
