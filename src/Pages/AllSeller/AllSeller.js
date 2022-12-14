import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {
    const [sellerData, setSellerData] = useState([])
    useEffect(() => {
        fetch(`https://assignment-12-server-delta.vercel.app/users?account=seller`)
            .then(res => res.json())
            .then(data => setSellerData(data))
    }, [])
    const handleDelete = id => {
        const agree = window.confirm('Are you sure you want to delete this account?')
        if (agree) {
            fetch(`https://assignment-12-server-delta.vercel.app/users/seller/${id}`, {
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
                        sellerData.map((data, i) => <tr key={data._id}>
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

export default AllSeller;