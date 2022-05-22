import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Login/Register/Register';
import AuthProvider from './Pages/Context/AuthProvider';
import Services from './Pages/Home/Services/Services';
import Dashboard from './Pages/Dashboard/Dashboard';
import AboutUs from './Pages/Home/About/AboutUs';
// import AddServices from './Pages/Dashboard/AddSevices/AddServices';
// import ManageServices from './Pages/Dashboard/ManageSevices/ManageServices';


function App() {
  return (
    <div class="App">
    <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />

          </Routes>
          <Routes>
           
           
            <Route path="/dashboard" element={<Dashboard/>} />
            {/* <Route path="/addservices" element={<AddServices/>} />
            <Route path="/manageServices" element={<ManageServices />} /> */}
          </Routes>
        </BrowserRouter>
    </AuthProvider>

    </div>
  );
}

export default App;
