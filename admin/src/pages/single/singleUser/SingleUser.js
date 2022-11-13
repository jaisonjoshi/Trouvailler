import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import './singleuser.scss';

const SingleUser =() => {
    return(
        <div className="home">
        <Navbar />
        <Sidenav />

        <div className="home-body">
            <div className="bids">
                <div className="bid-container">
                    <div>single user</div>
                </div>
            </div>
        </div>



        
        
    </div>
    )
}


export default SingleUser