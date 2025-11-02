import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import {
  DashBoard,
  Login,
  SignUp,
  BlogPage,
  CreateBlog,
  EditBlog,
  BlogDetailsPage,
} from "./pages/index";
import { Layout } from "./components/index";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        {/* Public Routes */}
        <Route
          path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='/register'
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        {/* Protected Route */}
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Layout>
                <DashBoard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path='/blogs'
          element={
            <ProtectedRoute>
              <Layout>
                <BlogPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path='/blogs/create'
          element={
            <ProtectedRoute>
              <Layout>
                <CreateBlog />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path='/blogs/edit/:id'
          element={
            <ProtectedRoute>
              <Layout>
                <EditBlog />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path='/blogs/:id'
          element={
            <ProtectedRoute>
              <Layout>
                <BlogDetailsPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route path='/' element={<Navigate to='/dashboard' replace />} />
        <Route path='*' element={<Navigate to='/dashboard' replace />} />
      </Routes>
    </Router>
  );
};

export default App;
