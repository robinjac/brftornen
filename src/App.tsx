import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import News from "./components/News";
import React, { Suspense } from "react";

// Dynamically import all components in the pages folder
const pages = import.meta.glob("./pages/*.tsx");

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<News />} />
          {Object.keys(pages).map((path) => {
            const slug = path.replace("./pages/", "").replace(".tsx", "");
            const Component = React.lazy(pages[path] as any);
            return (
              <Route
                key={slug}
                path={slug}
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;