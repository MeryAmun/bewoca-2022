import { Navigate,Outlet } from "react-router-dom";

 const ProtectedRoute = (props) => {
  const redirectPath = '/'

  if (!props.user) {
    return <Navigate to={redirectPath} />;
  }

  return <Outlet />;
};
export default ProtectedRoute;