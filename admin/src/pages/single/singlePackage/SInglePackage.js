import Navbar from '../../../components/navbar/Navbar'
import Sidenav from '../../../components/sidenav/Sidenav'
import './singlePackage.scss'
import Packageimg from "../../../components/assets/package.png"
import { useLocation, useNavigate } from 'react-router-dom'
import useFecth from '../../../hooks/useFetch'
import axios from 'axios'


const SinglePackage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const {data, loading, error } = useFecth(`/packages/${id}`);


    const handlePackageUpdate = (id) => {
        navigate(`/packages/${id}/update`)
    }
    const handlePackageDelete = async (id) => {
        try{
            await axios.delete(`/packages/${id}`);
            navigate('/packages')
        }catch(err){
            console.log(err);
        }

    }
    return(

        <div className="Single-package">
            <Navbar />
            <Sidenav />

            <div className="singlepackage-container">
               {loading ? ("loading ") : (
                    <div className="singlepackage">
                    <div className="singlepackage-head">
                        <h1>{data.title}</h1>
                        <div className="singlepackage-btngrp">
                            <button className='singlepackage-btn' onClick={() => handlePackageUpdate(id)}>Update Package</button>
                            <button className='singlepackage-btn' onClick={() => handlePackageDelete(id)}>Delete Package</button>
                        </div>
                    </div>
                    <div className="singlepackage-body">
                        <div className="singlepackage-img">
                            <img src={Packageimg} />
                        </div>
                        <div className="singlepackage-content">  
                            <p>{data.description}</p>
                            <h3>{data.duration}</h3>
                            <h2>{data.price}</h2>
                        </div>

                    </div>
                </div>
               )}
            </div>



            
            
        </div>
    )
}


export default SinglePackage