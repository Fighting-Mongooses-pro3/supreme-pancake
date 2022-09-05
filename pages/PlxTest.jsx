import React, { useRef } from "react";
import { useParallax } from "react-scroll-parallax";
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';


const PlxTest= () => {
    const target = useRef(null);
    
    
      const frog = useParallax({
        scaleX: [1.1, 0, 'easeInQuad'],
        targetElement: target.current,
      });
    
      const pig = useParallax({
          scaleX: [1.3, .5, ],
          targetElement: target.current,
      });
      
      return (
        <div ref= {target} style={{
            height:"3000px",
        }}>
            <div ref={pig.ref} style={{
                
                backgroundImage: "url('https://unsplash.it/1800/1200?image=883')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minWidth: '100vw',
                minHeight:"100%"}}>
            <div id="change"  style={{
                width: '100%',
            }}>
            <img src="https://unsplash.it/1800/1200?image=883" ref={frog.ref}/>
        </div>
        public/landing__images/book-gaa6361739_1920.jpg
                {/* <div id="bg">
                    <img src="https://unsplash.it/1800/1200?image=883"/>
                </div> */}
            </div>
        </div>
  
  );
};

export default PlxTest;
