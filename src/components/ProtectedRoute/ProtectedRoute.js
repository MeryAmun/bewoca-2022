import { Navigate,Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
 const ProtectedRoute = ({
  redirectPath = '/',
}) => {
  const { user } = useSelector((state) => state.user);
  const { displayName } = user || {};
  if (!displayName) {
    return <Navigate to={redirectPath} />;
  }

  return <Outlet />;
};
export default ProtectedRoute;