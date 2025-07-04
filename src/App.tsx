import { Routes, Route } from "react-router";
import Layout from "@/components/Layout";
import News from "@/components/News";
import Page from "@/components/Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<News />} />
        <Route path="/:slug" element={<Page />} />
      </Route>
    </Routes>
  );
}

export default App;
