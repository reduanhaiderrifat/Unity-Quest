import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const PriviteRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="h-[calc(100vh-80px)] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate state={location.pathname} to="/login" replace={true}></Navigate>
  );
};

export default PriviteRoute;
