import React from 'react';
import silhouette from '../Assets/Images/sitting-in-chair-silhouette-5.png';

function Silhouette() {
    return (
        <div className="bottom-0 col-6 end-0 position-absolute Silhouette">
            <img src={silhouette} alt="silhouette" />
        </div>
    );
}

export default Silhouette;
