import { Link } from 'react-router-dom';
import DataTable from '../../components/dataTable/Dtatable';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './userlist.scss'


const Userlist =() => {
    return(
        <div className="userlist">
            <Navbar />
            <Sidenav />

            <div className="userlist-body">
                <div>
                    <Link to="/users/newuser"> Add a new user</Link>
                </div>
                <DataTable />
            </div>



            
            
        </div>
    )
}
export default Userlist;