import { Children } from "react";
import { Navigate } from "react-router-dom";

function ProtactedRoutes({ user, Children }) {
  if (user) {
    return Children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtactedRoutes;
