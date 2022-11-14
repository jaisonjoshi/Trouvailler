import './App.css';

import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Userlist from './pages/userList/Userlist';
import Vendorlist from './pages/vendorlist/Vendorlist';
import SingleUser from './pages/single/singleUser/SingleUser';
import Packages from './pages/packages/Packages';
import NewPacakge from './pages/new/newPackage/NewPackage';
import SinglePackage from './pages/single/singlePackage/SInglePackage';
import UpdatePackage from './pages/update/updatePackage/UpdatePackage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path="users">
            <Route index element={<Userlist />} />
            <Route path=':userid' element={<SingleUser />} />

          </Route>
          <Route path="hotels">
            <Route index element={<Vendorlist />} />
          </Route>
          <Route path="packages">
            <Route index element={<Packages />} />
            <Route path=":id" element= {<SinglePackage />} />
            <Route path=':id/update' element={<UpdatePackage />} />
            <Route path='newpackage' element={<NewPacakge />} />
          </Route>
        </Route>
      


      </Routes>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
