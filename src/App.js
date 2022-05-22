import logo from './logo.svg';
import './App.css';
import { Navbar } from './Pages/Shared/Navbar/Navbar';
import { Login } from './Pages/Login/Login';
import { SignUp } from './SignUp/SignUp';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Blogs } from './Pages/Blogs/Blogs';
import { Purchase } from './Pages/Purchase/Purchase';
import { RequireAuth } from './Pages/Shared/RequireAuth/RequireAuth';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import { MyOrders } from './Pages/Dashboard/MyOrders';
import { AddReview } from './Pages/Dashboard/AddReview';
import { MyProfile } from './Pages/Dashboard/MyProfile';
import { DashboardSidebar } from './Pages/Dashboard/DashboardSidebar';
import { NotFound } from './Pages/Shared/NotFound';
import { Portfolio } from './Pages/Portfolio/Portfolio';


function App() {
  return (
    <div className="App">
      <Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/parts/purchase/:id" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      </Navbar>
    </div>
  );
}

export default App;
