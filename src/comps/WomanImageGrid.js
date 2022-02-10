import React from "react";
import useFirestore from '../hooks/useFirestore';

const WomanImageGrid = () =>{
    const { docs } = useFirestore('woman.collection');
    console.log(docs);

    return(
        <div className="products-container">
           {docs && docs.map(doc => (
               <div className="product-card" key={doc.id}>
                 <div className='product-img'>
                <img src = {doc.url} alt="uploaded pic" />
                </div>
                <div className='product-name'>
                            {doc.name}
                        </div>
                <div className='product-description'>
                            Description:{doc.description}
                    </div>        
                <div className='product-price'>
                            {doc.price}.00$
                    </div>
                    <button className='addcart-btn'>Add To Cart</button>
                    
                </div>
                
           )) }
        </div>
    )
}

export default WomanImageGrid;