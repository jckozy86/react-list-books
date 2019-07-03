import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </>
      
  </Router>
  );
}

export default App;
