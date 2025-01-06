import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRouter;
