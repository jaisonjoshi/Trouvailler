
import { useState } from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Sidenav from '../../../components/sidenav/Sidenav';
import './newPackage.scss';
import axios from "axios"
const NewPackage =() => {
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
        }catch(err){
            console.log(err)
        }
    }

    

    return(
        <div className="home">
            <Navbar />
            <Sidenav />

            <div className="home-body">
                <div className="bids">
                    <h1>Recent Bids</h1>
                    <div className="bid-container">
                        <form>
                            <label > Title</label>
                            <input type="text" name="" id="title" onChange={handleChange}/>
                            <label>Description</label>
                            <input type="text" id="description" onChange={handleChange}/>
                            <label>Location</label>
                            <input type="text" id="location" onChange={handleChange}/>
                            <label>Duration</label>
                            <input type="text" id="duration" onChange={handleChange}/>
                            <label>Price</label>
                            <input type="text" id="price" onChange={handleChange}/>
                            <button onClick={handleClick}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>



            
            
        </div>
    )
}

export default NewPackage