import React from 'react';
import Footer from '../../components/Footer/Footer'
const Home = () => {
    return (
        <div>
            {/* Header */}
            <div className="bg-nature-bridge bg-no-repeat bg-cover flex justify-center align-middle">
                <div className='flex flex-col px-10 py-11 lg:py-32 items-center'>
                    <img className='w-full sm:w-3/12 lg:w-2/12' src={require('../../Assets/Trouvailler Green@2x.png')} alt="Logo" />
                    <h2 className='text-graydust-extralight text-center text-lg'>Grow your business with Trouvailler</h2>
                </div>
            </div>

            {/* Footer */}
            <Footer/>
        </div>
    );
};


export default Home;
