import { Navigate } from "react-router-dom";

import auth from "../services/authService";

export default function RequireAuth({ children }) {
  let user = auth.getCurrentUser() == null ? false : true;

  return user === true ? children : <Navigate to="/login" replace />;
}
