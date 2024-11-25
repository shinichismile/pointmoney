import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Layout from './components/Layout';
import Login from './pages/Login';
import WorkerDashboard from './pages/WorkerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import WithdrawalRequests from './pages/WithdrawalRequests';
import PointHistory from './pages/PointHistory';
import Reports from './pages/Reports';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuthStore } from './stores/authStore';

function App() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route element={<Layout />}>
              <Route path="/" element={<WorkerDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/withdrawals" element={<WithdrawalRequests />} />
              <Route path="/history" element={<PointHistory />} />
              <Route path="/reports" element={<Reports />} />
            </Route>
          </Route>
        </Routes>
      </Router>
      <Toaster position="top-right" expand={false} richColors />
    </>
  );
}

export default App;