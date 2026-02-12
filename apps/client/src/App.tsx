import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import CreateBlog from './pages/CreateBlog';

// --- Protected Route Wrapper ---
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

// --- Main Layout with Navbar ---
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user, logout, isAuthenticated } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="flex items-center justify-between bg-white px-8 py-4 shadow-sm">
        <Link to="/" className="text-xl font-bold text-blue-600">UCS UNZA</Link>
        <div className="space-x-6 flex items-center">
          <Link title="Home" to="/" className="hover:text-blue-500">Home</Link>
          {isAuthenticated ? (
            <>
              <Link to="/create" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">New Post</Link>
              <span className="text-gray-500 font-medium">Hi, {user?.username}</span>
              <button onClick={logout} className="text-red-500 hover:underline">Logout</button>
            </>
          ) : (
            <Link to="/login" className="font-semibold text-blue-600">Login</Link>
          )}
        </div>
      </nav>
      <main className="p-8">{children}</main>
    </div>
  );
};

// --- Main App Component ---
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
            
            {/* Protected Routes */}
            <Route 
              path="/create" 
              element={
                <ProtectedRoute>
                  <CreateBlog />
                </ProtectedRoute>
              } 
            />
            
            {/* 404 Fallback */}
            <Route path="*" element={<div className="text-center mt-20 text-2xl">404 - Page Not Found</div>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

