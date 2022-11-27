import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {
    const [buyerData, setBuyerData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/users?account=buyer`)
            .then(res => res.json())
            .then(data => setBuyerData(data))
    }, [])
    const handleDelete = id => {
        const agree = window.confirm('Are you sure you want to delete this account?')
        if (agree) {
            fetch(`http://localhost:5000/users/buyer/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Account Delete Successful')
                    }
                })
        }
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete Button</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyerData.map((data, i) => <tr key={data._id}>
                            <th>{i + 1}</th>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td><button onClick={() => handleDelete(data._id)} className="btn btn-error">Delete</button></td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default AllBuyer;