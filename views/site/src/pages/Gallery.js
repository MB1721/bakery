import React, { useEffect, useState } from 'react';
import '@styles/pages/Gallery.scss';
import KeyList from '../../../../assets/scripts/view-utils/key-list';
import camelCaseContext from '../../../../assets/scripts/view-utils/camel-case-context';
import Carousel from 'react-bootstrap/Carousel';

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
        const src = carousel[category];
        newPanels.push(
          <div 
            key={panelKeys.generateKey(category)} 
            className={ panelCount++ ? "carousel-item" : "carousel-item active" }
          >
            <img 
              src={galleryCtx(src)} 
              className="d-block w-100" 
              alt={camelCaseContext(src).fileStr} />
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
      <div id="gallery-categories" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner h-100">
          {navigation.panels}
        </div>
        <button className="carousel-control-prev" data-bs-target="#gallery-categories" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" data-bs-target="#gallery-categories" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}