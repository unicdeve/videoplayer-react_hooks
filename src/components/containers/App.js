import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WbnPlayer from "./WbnPlayer";

const App = () => (
  <Router>
      <Switch>
          <Route exact path={"/"} component={WbnPlayer} />
          <Route exact path={"/:activeVideo"} component={WbnPlayer} />
      </Switch>
  </Router>
)

export default App;