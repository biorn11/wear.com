import React from "react";
import ShopMen from './../../assets/man-style.jpg';
import ShopWomen from './../../assets/female-style.jpg';
import'./styles.scss';

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
            <div
                className="item"
            style={{
                backgroundImage: `url(${ShopWomen})`
            }}

            >
                <a href = "http://localhost:3000/womans">
                    Womans
                </a>
            </div>
            
            <div
            className="item"    
            style={{
                backgroundImage: `url(${ShopMen})`
            }}

               >
                   <a href = "http://localhost:3000/mens">
                       Mens
                   </a>
               </div>
            </div>
            </div>
    );
};

export default Directory;