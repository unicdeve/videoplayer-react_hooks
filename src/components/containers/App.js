import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WbnPlayer from "./WbnPlayer";
import GlobalStyle from "../styles/GlobalStyle";

const App = () => (
  <Router>
      <>
          <Switch>
              <Route exact path={"/"} component={WbnPlayer} />
              <Route exact path={"/:activeVideo"} component={WbnPlayer} />
          </Switch>
          <GlobalStyle/>
      </>
  </Router>
)

export default App;