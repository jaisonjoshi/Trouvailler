import Navbar from '../../../components/navbar/Navbar'
import Sidenav from '../../../components/sidenav/Sidenav'
import './newuser.scss'

const Newuser =() => {
    return(
        <div className="home">
            <Navbar />
            <Sidenav />

            <div className="home-body">
                <div className="bids">
                    <h1>Recent Bids</h1>
                    <div className="bid-container">
                        Newuser from
                    </div>
                </div>
            </div>



            
            
        </div>
    )
}


export default Newuser