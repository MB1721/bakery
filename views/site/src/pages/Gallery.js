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
      
      // fill gallery productGroups
      galleryCtx.keys().forEach(img => {
        // fill product category set
        const category = img.split('/')[1];
        gallery[category].push(img);
      });

      // fil carousel with the first image of each category
      Object.keys(gallery).forEach(category => carousel[category] = gallery[category][0]);
      
      const panelKeys = new KeyList();
      const colKeys = new KeyList();
      let newPanels = [];
      
      const groupsPerSlide = 3;
      const productGroups = Object.entries(carousel); 
      let groupIdx = 0;
      let numSlides = Math.ceil(productGroups.length / groupsPerSlide);
    
      for (numSlides; numSlides >= 1; numSlides--) {
        // construct columns
        let cols = [];
        for (let count = 0; count < groupsPerSlide; count++) {
          // if another image exits, push next image index into row 
          if (productGroups[groupIdx]) {
            const tuple = productGroups[groupIdx++];
            const productSrc = tuple[1];
            cols.push(
              <img
                key={colKeys.generateKey(productSrc)} 
                src={galleryCtx(productSrc)} 
                className='col img-fluid'
                alt={camelCaseContext(productSrc).fileStr} 
              />
            );
          } else {
            let blankSpots = groupsPerSlide - count;
            let repeatIdx = 0;
            for (blankSpots; blankSpots > 0; blankSpots--) {
              const repeatSrc = productGroups[repeatIdx++][1];
              // push slides at the front of the carousel to the back
              cols.push(
                <img
                  key={colKeys.generateKey(repeatSrc)} 
                  src={galleryCtx(repeatSrc)} 
                  className='col img-fluid'
                  alt={camelCaseContext(repeatSrc).fileStr} 
                />
              );
            }
            break;
          }
        }

        let newPanel = (
          <Carousel.Item key={panelKeys.generateKey('group')} className='container-fluid h-100'>
            <div className='row h-100'>
              {cols}
            </div>
          </Carousel.Item>
        );
        
        newPanels.push(newPanel);
      }
      
      newObj = {...newObj, panels: [...newPanels]};
      return newObj;
    });

  }, []);


  return (
    <div id="gallery">
      <Carousel id='gallery-categories' interval={null} slide={false}>
        {navigation.panels}
      </Carousel>
    </div>
  );
}