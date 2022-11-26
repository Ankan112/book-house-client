import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/UserContext';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])
    return (
        <div>
            <h1>My orders {orders.length}</h1>
        </div>
    );
};

export default MyOrders;