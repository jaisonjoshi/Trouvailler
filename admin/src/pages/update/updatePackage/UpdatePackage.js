
import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import './updatePackage.scss';
import axios from "axios"
import useFecth from '../../../hooks/useFetch';


const UpdatePackage =() => {
    const navigate = useNavigate();
    const location = useLocation();
    const [info, setinfo] = useState({});
    const id = location.pathname.split("/")[2];


    const {data} = useFecth(`/packages/${id}`);

    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    }
    const updatehandleClick = async e => {
        e.preventDefault();
        try{
            const updatedPackage = {
                ...info
            };
            await axios.patch(`/packages/${id}`, updatedPackage);
            console.log("package has been updated")

            await navigate(`/packages/${id}`)
        }catch(err){
            console.log(err)
        }
        
    }

    

    return(
        <div className="new-package">
            <Navbar />
            <Sidenav />

            <div className="newpackage-body">
                    <h1>Update the Package : {data.title}({data._id})</h1>
                    <div className="newpackageform-container">
                        <form >
                            <div className="form-item">
                                <label > Title</label>
                                <input type="text" name="" id="title" defaultValue={data.title} onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Description</label>
                                <textarea type="text" id="description" defaultValue={data.description} onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Location</label>
                                <input type="text" id="location" defaultValue={data.location} onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Duration</label>
                                <input type="text" id="duration" defaultValue={data.duration} onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Price</label>
                                <input type="text" id="price" defaultValue={data.price} onChange={handleChange}/>
                            
                            </div>
                            <div className="package-form-submit">
                                <button onClick={updatehandleClick}>Update Package</button>

                            </div>
                        </form>
                    </div>
            </div>



            
            
        </div>
    )
}

export default UpdatePackage