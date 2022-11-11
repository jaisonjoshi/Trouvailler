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
                <DataTable />
            </div>



            
            
        </div>
    )
}
export default Userlist;