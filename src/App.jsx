import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/mainLayout';
import GetStarted from './pages/GetStarted';
import UserSignup from './pages/UserSignup';
import DoctorSignup from './pages/DoctorSignup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useAuth } from './context/AuthContext';
import BookAConsultation from './pages/BookAConsultation';
import ScrollToTop from './components/scrollToTop';


export default function App() {

  const { userToken } = useAuth();

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/user-signup" element={<UserSignup />} />
          <Route path="/doctor-signup" element={<DoctorSignup />} />
          <Route path="/login" element={<Login />} />
        </Route> 
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={ userToken ? <Dashboard />: null} />
          <Route path="/book" element={userToken ? <BookAConsultation />: null} />
        </Route>
      </Routes>
    </Router>
  )
};