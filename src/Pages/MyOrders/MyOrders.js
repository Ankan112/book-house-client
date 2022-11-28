import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://assignment-12-server-delta.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Book Name</th>
                        <th>Price</th>
                        <th>Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((data, i) => <tr key={data._id}>
                            <th>{i + 1}</th>
                            <td>{data.productName}</td>
                            <td>{data.price}</td>
                            <td><Link to='/dashboard/myorders/payment' className="btn btn-error">Pay</Link></td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;