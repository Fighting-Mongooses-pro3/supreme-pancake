import React, { useRef } from 'react'
import { useParallax } from 'react-scroll-parallax';

// import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const PlxTest= () => {
    const target = useRef(null);
    
    
      const frog = useParallax({
        scaleX: [0, 2, 'easeInQuad'],
        targetElement: target.current,
      });
    
      
      return (
        <div ref={target} style={{
            backgroundImage: "url('https://unsplash.it/1800/1200?image=883')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: '100vw'}}>
                 <div id="change" ref={frog.ref} style={{
                     width: '100vw',
                 }}>
	            <img src="https://unsplash.it/1800/1200?image=883"/>
            </div>
            <div id="bg">
	            {/* <img src="https://unsplash.it/1800/1200?image=883"/> */}
            </div>
        </div>
      );
    };

export default PlxTest