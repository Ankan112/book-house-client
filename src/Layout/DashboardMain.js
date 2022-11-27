import React from 'react';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const DashboardMain = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Dashboard></Dashboard>
            <Footer></Footer>
        </div>
    );
};

export default DashboardMain;