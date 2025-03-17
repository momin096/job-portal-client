import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import Loading from "../pages/Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loading />
    }
    else if (!user) {
        return <Navigate to={'/login'} state={location?.pathname} />
    }
    else if (user) {
        return children;
    }
};

export default PrivateRoute;