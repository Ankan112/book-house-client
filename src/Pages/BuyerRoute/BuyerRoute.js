import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import useBuyer from '../../Hooks/useBuyer'


const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email)
    const location = useLocation();

    if (loading || isBuyerLoading) {
        return <h1 className='text-2xl font-semibold text-center my-6'>Loading</h1>
    }

    if (user && user.uid && isBuyer) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default BuyerRoute;