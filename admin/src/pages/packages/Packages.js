import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidenav from '../../components/sidenav/Sidenav';
import './packages.scss';
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from 'react';

const Packages =() => {
    const [packages, setPackages] = useState([]);
    const {data, loading, err} = useFetch("/packages");
    useEffect(()=> {
         setPackages(data);
    }, [data]);
  
    return(
        <div className="home">
            <Navbar />
            <Sidenav />

            <div className="home-body">
                <div className="bids">
                    <h1>Recent Bids</h1>
                    <div className="bid-container">
                        Packages
                        <Link to="/packages/newpackage">
                            Create a new package
                        </Link>
                        

                        
                            { packages && packages.map((pack) => (
                                
                                
                                    <div key={pack._id}>
                                        <h1>{pack.title}</h1>
                                        <h2>{pack._id}</h2>
                                        <h3>{pack.description}</h3>
                                        </div>
                                    
                            
                                    
                            )
                            ) }
                        
                    </div>
                </div>
            </div>



            
            
        </div>
    )
}

export default Packages