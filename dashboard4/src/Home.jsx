import React from 'react'
import LandingPage from './Components/LandingPage/LandingPage'
import Dashboard from './Components/Dashboad.jsx';
import SalesAgent from './Components/SalesAgent/SalesAgent';
import DashboardLayout from './Components/DashBoardLayout.jsx';

function Home() {
    return (
        <>
            <div className="service1" id="work1">
                <LandingPage />
            </div>

            <div className="service2" id="work2">
                <SalesAgent />
            </div>
            {/* <div className="service3" id="work3">
                <DashboardLayout>
                    <Dashboard />
                </DashboardLayout>
            </div> */}
        </>

    )
}

export default Home;