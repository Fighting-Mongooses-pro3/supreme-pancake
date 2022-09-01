import React, { useState, useEffect } from 'react'
import Draggable from 'react-draggable';
import ReactDOM from 'react-dom';

export default function buildTest() {
   let gridX;
   let cardX;
   let card1;
  if(typeof window !== "undefined"){
    gridX = (document.getElementById("page").clientWidth)
    cardX = Math.round(gridX*.40)
    card1 = document.getElementById("card1")
  }
  const [componentEl, setComponents] = useState();
  const [cardInfo, setCardInfo] = useState([]);
  // let cardInfo = []

  function addCard(){
    cardInfo.push({text:"new card"})
    renderCard()
  }

  function renderCard(){
    
    let cardEls = cardInfo.map(e=>{return <Draggable grid={[gridX/2, 20]} scale={1}><div id='card1'  className='relative left-5 top-5 w-2/5 h-1/4 border'>{e.text}</div></Draggable> })
    setComponents(cardEls)
    
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div>
      <button className='border' onClick={()=>renderCard()}>render</button> <br />
      <button className='border' onClick={()=>addCard()}>add</button>
      </div>
    <div id='page' className=' w-1/4 h-2/3  overflow-hidden   border '>

    {componentEl}
    
    {/* <Draggable grid={[gridX/2, 20]} scale={1}><div id='card1'  className='relative left-5 top-5 w-2/5 h-1/4 border'>card</div></Draggable>  */}
  


    </div>
    </div>
    
    
  )
}
