import { Navigate } from "react-router-dom";
import { useDataContext } from "./context/DataContext";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ element: Component, ...rest }) => {
  const { token } = useDataContext();

  if (!token) {
    return <Navigate to="/" />;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
