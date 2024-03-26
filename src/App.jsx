// App.js
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ZonePage from './pages/ZonePage';
import ZoneVideoPage from './pages/ZoneVideoPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/zone1-label1" element={<ZonePage serverEndPoint={`${import.meta.env.VITE_SERVER_URL}/api/zone1-label1?populate=*`} />} />
        <Route path="/zone1-label2" element={<ZoneVideoPage serverEndPoint={`${import.meta.env.VITE_SERVER_URL}/api/zone1-label2?populate=*`} />} />
        <Route path="/zone2-label1" element={<ZonePage serverEndPoint={`${import.meta.env.VITE_SERVER_URL}/api/zone2-label1?populate=*`} />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;