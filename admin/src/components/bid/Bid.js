import './bid.scss';

const Bid = () => {
    return(
        <div className='bid-card'>
            <div className="bid-header">
                <h1>Thiruvananthapuram</h1>
                <div className="status-box">
                    <h3>Accepted</h3>
                </div>
            </div>  
            <div className="bid-body">
                <h2>Bid body</h2>
            </div>
            <div className="bid-footer">
                <h2>Bid Footer</h2>
            </div>
        </div>
    )
}


export default Bid