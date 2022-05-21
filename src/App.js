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
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      </Navbar>
    </div>
  );
}

export default App;
