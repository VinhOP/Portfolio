import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Fragment } from "react";

function App() {
  const handleScroll = (e) => {
    console.log(e.currentTarget.scrollTop);
    console.log(e.currentTarget.offsetHeight);
  };
  return (
    <Router>
      <div className="App" onScroll={handleScroll}>
        <Routes>
          {publicRoutes.map((route, i) => {
            const Layout = route.layout ? route.layout : Fragment;
            const Page = route.component;
            return (
              <Route
                key={i}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
