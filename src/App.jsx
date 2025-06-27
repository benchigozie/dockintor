import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/mainLayout';
import GetStarted from './pages/GetStarted';
import UserSignup from './pages/UserSignup';
import DoctorSignup from './pages/DoctorSignup';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/user-signup" element={<UserSignup />} />
          <Route path="/doctor-signup" element={<DoctorSignup />} />
        </Route>
      </Routes>
    </Router>
  )
};