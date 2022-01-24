import React, { useState } from 'react';
import WomanImageGrid from '../../comps/WomanImageGrid';
import './styles.scss';

export function Womans() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="Womans">
      <h2>Womans Clothing</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <WomanImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg}
    </div>
  );
}

export default Womans;
