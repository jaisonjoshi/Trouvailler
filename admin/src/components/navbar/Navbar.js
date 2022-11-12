import './navbar.scss';
import Logo from '../assets/Green.png'
import profile from '../assets/i.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src={Logo} alt="" className="nav-logo" /> 

                </Link>
                <h2>Admin</h2>
            </div>
            <div className='nav-profile'>
                <img src={profile} alt="" className="nav-profile-icon" />
            </div>
        </div>
    )
}


export default Navbar