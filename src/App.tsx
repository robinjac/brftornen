import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import News from "@/components/News";
import pages from "@/pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<News />} />
          {pages.map((page) => {
            return (
              <Route
                key={page.slug}
                path={page.slug}
                element={<page.component />}
              />
            );
          })}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;