import { Routes, Route, HashRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import News from "@/components/News";
import Page from "@/components/Page";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<News />} />
          <Route path="/:slug" element={<Page />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
