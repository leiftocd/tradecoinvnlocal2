/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;