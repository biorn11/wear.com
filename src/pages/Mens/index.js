import React, { useState } from 'react';
import MensImageGrid from '../../comps/MensImageGrid';
import './styles.scss';




function Mens() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
  
    <div className="Mens">
      <h2>Mens Clothing</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

     
      <MensImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg }
    </div>
  );
}

export default Mens;