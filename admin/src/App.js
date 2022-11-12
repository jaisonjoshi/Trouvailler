import './App.css';
import Bid from './components/bid/Bid';
import Navbar from './components/navbar/Navbar';
import Sidenav from './components/sidenav/Sidenav';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Userlist from './pages/userList/Userlist';
import Vendorlist from './pages/vendorlist/Vendorlist';
import SingleUser from './pages/single/singleUser/SingleUser';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path="users">
            <Route index element={<Userlist />} />
            <Route path='userid' element={<SingleUser />} />
          </Route>
          <Route path="Vendors">
            <Route index element={<Vendorlist />} />
          </Route>
        </Route>
      


      </Routes>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
