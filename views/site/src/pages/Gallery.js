import React, { useEffect, useState } from 'react';
import '@styles/pages/Gallery.css';
import KeyList from '../../../../assets/scripts/view-utils/key-list';

export default function Gallery() {
  const [navigation, setNavigation] = useState({
    gallery: {
      'breads': [],
      'pies-and-tarts': [],
      'pastries': [],
      'quick-breads': [],
      'cakes': []
    },
    carousel: {},
    panels: []
  });

  useEffect(() => {
    const galleryCtx = require.context('../assets/images/gallery', true);

    setNavigation(prevObj => {
      let newObj = { ...prevObj };
      let { gallery, carousel, panels } = newObj;
      
      // fill gallery categories
      galleryCtx.keys().forEach(img => {
        // fill product category set
        const category = img.split('/')[1];
        gallery[category].push(img);
      });

      // fil carousel with the first image of each category
      Object.keys(gallery).forEach(category => carousel[category] = gallery[category][0]);
      
      const panelKeys = new KeyList();
      let panelCount = 0;
      let newPanels = [ ...panels ];
    
      for (const category in carousel) {
        newPanels.push(
          <div key={panelKeys.generateKey(category)} className={panelCount++ ? "carousel-item" : "carousel-item active"}>
            <img src={galleryCtx(carousel[category])} className="d-block w-25" />
          </div>
        );
      }
      
      newObj = {...newObj, panels: [...newPanels]};
      console.log(newObj);
      return newObj;
    });

    

  }, []);


  return (
    <div id="gallery">
      <div id="gallery-categories" className="carousel slide">
        <div className="carousel-inner">
          {navigation.panels}
        </div>
      </div>
    </div>
  );
}