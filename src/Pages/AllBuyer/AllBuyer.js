import React, { useEffect, useState } from 'react';

const AllBuyer = () => {
    const [buyerData, setBuyerData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/users?account=buyer`)
            .then(res => res.json())
            .then(data => setBuyerData(data))
    }, [])
    return (
        <div>
            <h1>all buyers {buyerData.length}</h1>
        </div>
    );
};

export default AllBuyer;