
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import './newPackage.scss';
import axios from "axios"


const NewPackage =() => {
    const navigate = useNavigate();

    const [info, setinfo] = useState({});

    const handleChange = (e) => {
        setinfo((prev) => ({...prev, [e.target.id] : e.target.value}))
    }
    const handleClick = async e => {
        e.preventDefault();
        try{
            const newPackage = {
                ...info
            };
            await axios.post('/packages', newPackage);
            console.log("new package has been created")

            await navigate('/packages')
        }catch(err){
            console.log(err)
        }
        
    }

    

    return(
        <div className="new-package">
            <Navbar />
            <Sidenav />

            <div className="newpackage-body">
                    <h1>Create a new Travel Package</h1>
                    <div className="newpackageform-container">
                        <form >
                            <div className="form-item">
                                <label > Title</label>
                                <input type="text" name="" id="title" onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Description</label>
                                <input type="text" id="description" onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Location</label>
                                <input type="text" id="location" onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Duration</label>
                                <input type="text" id="duration" onChange={handleChange}/>
                            
                            </div>
                            <div className="form-item">
                                <label>Price</label>
                                <input type="text" id="price" onChange={handleChange}/>
                            
                            </div>
                            <div className="package-form-submit">
                                <button onClick={handleClick}>Create Package</button>

                            </div>
                        </form>
                    </div>
            </div>



            
            
        </div>
    )
}

export default NewPackage