import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/mainLayout';
import GetStarted from './pages/GetStarted';
import UserSignup from './pages/UserSignup';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/user-signup" element={<UserSignup />} />
        </Route>
      </Routes>
    </Router>
  )
};