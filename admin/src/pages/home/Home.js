import Bid from '../../components/bid/Bid';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './home.scss';

const Home =() => {
    return(
        <div className="home">
            <Navbar />
            <Sidenav />

            <div className="home-body">
                <div className="bids">
                    <h1>Recent Bids</h1>
                    <div className="bid-container">
                        <Bid />
                        <Bid />
                        <Bid />
                    </div>
                </div>
            </div>



            
            
        </div>
    )
}

export default Home