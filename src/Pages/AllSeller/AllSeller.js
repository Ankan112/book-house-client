import React, { useEffect, useState } from 'react';

const AllSeller = () => {
    const [sellerData, setSellerData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/users?account=seller`)
            .then(res => res.json())
            .then(data => setSellerData(data))
    }, [])
    return (
        <div>
            <h1>all seller {sellerData.length}</h1>
        </div>
    );
};

export default AllSeller;