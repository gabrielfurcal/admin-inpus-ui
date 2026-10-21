import { Navigate } from "react-router-dom";

import { useAuth } from '../contexts/auth/AuthContext';
import { AuthStatus } from "../contexts/auth/props";
import { ProtectedRouteProps } from "./props";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { authStatus } = useAuth();

    if(authStatus === AuthStatus.Unauthenticated) {
        return <Navigate to="/login"/>;
    }
    else if(authStatus === AuthStatus.Initializing || authStatus === AuthStatus.TokenExpired) {
        return <div>Checking session...</div>
    }
    else {
        return children;
    }
}

export default ProtectedRoute;