import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import News from './pages/News';
import Page from "./pages/Page"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<News />} />
          <Route path=":slug" element={<Page />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;