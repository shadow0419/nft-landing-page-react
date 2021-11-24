import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// @import component
import Loading from "../../component/common/Loading";
// @import pages
const Landing = React.lazy(() => import("../Landing"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route path={`/`} render={(props) => <Landing {...props} />} />
          {/* <Route path={`/`} render={(props) => <Loading />} /> */}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
