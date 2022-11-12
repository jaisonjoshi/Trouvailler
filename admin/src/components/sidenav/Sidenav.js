import { Link } from 'react-router-dom';
import './sidenav.scss';

const Sidenav = () => {
    return(
        <div className='sidenav'>
            <ul>
                <Link to="/users">
                <li>
                    <span >Users</span>
                </li>
                </Link>
                <Link to="/vendors">
                <li>
                    <span>Vendors</span>
                </li>
                </Link>
                <li>
                    <a href="">Bids</a>
                </li>
                <li>
                    <a href="">packages</a>
                </li>
                <li>
                    <a href="">reviews</a>
                </li>
                <li>
                    <a href="">offers</a>
                </li>
            </ul>
        </div>
    )
}


export default Sidenav