import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// import Home from './pages/Home';
import News from './pages/News';
import Page from "./pages/Page"

// import ReportFault from './pages/ReportFault';

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