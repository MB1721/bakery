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
      
      // fill gallery productImgs
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
      
      const imgsPerSlide = 3;
      const productImgs = Object.entries(carousel); 
      const imgSize = Math.floor(100/imgsPerSlide);

      let imgIdx = 0;
      let numSlides = Math.ceil(productImgs.length / imgsPerSlide);
    
      for (numSlides; numSlides >= 1; numSlides--) {
        // construct columns
        let cols = [];
        for (let count = 0; count < imgsPerSlide; count++) {
          // if another image exits, push next image index into row 
          if (productImgs[imgIdx]) {
            const tuple = productImgs[imgIdx++];
            const productSrc = tuple[1];
            cols.push(
              <img
                key={colKeys.generateKey(productSrc)} 
                src={galleryCtx(productSrc)} 
                className='col img-fluid p-0' style={{width: `${imgSize}%`}}
                alt={camelCaseContext(productSrc).fileStr} 
              />
            );
          } else {
            let blankSpots = imgsPerSlide - count;
            let repeatIdx = 0;
            for (blankSpots; blankSpots > 0; blankSpots--) {
              const repeatSrc = productImgs[repeatIdx++][1];
              // push slides at the front of the carousel to the back
              cols.push(
                <img
                  key={colKeys.generateKey(repeatSrc)} 
                  src={galleryCtx(repeatSrc)} 
                  className='col img-fluid p-0' style={{width: `${imgSize}%`}}
                  alt={camelCaseContext(repeatSrc).fileStr} 
                />
              );
            }
            break;
          }
        }

        let newPanel = (
          <Carousel.Item key={panelKeys.generateKey('Img')} className='container-fluid h-100'>
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
      <Carousel id='gallery-categories' 
        interval={null} 
        slide={false} 
        data-bs-theme='dark' 
        indicators={false}
      >
        {navigation.panels}
      </Carousel>
    </div>
  );
}