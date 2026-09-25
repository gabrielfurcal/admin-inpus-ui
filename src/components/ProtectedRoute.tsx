import { Navigate } from "react-router-dom";

import { useAuth } from '../contexts/auth/AuthContext';
import { ProtectedRouteProps } from "./props";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if(!isAuthenticated) {
        return <Navigate to="/login"/>;
    }

    return children;
}

export default ProtectedRoute;