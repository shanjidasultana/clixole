import React from 'react';
import Sidebar from 'react';
import Footer from '../Shared/Footer/Footer';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';


const Dashboard = () => {
  return (
    // <div>
       <>
        {/* <BrowserRouter> */}
       
            <Sidebar />
            <div class="md:ml-64">
                {/* <Routes>
                    <Route exact path="settings" component={Settings} />
                    <Route exact path="addservices" component={AddServices} />
                    <Route exact path="manageservices component={ManageServices} />
                </Routes> */}
                <Footer />
            </div>
        {/* </BrowserRouter> */}
        </>
    // </div>
  );
};

export default Dashboard;