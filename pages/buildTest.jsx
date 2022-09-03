import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { useReactToPrint } from 'react-to-print';
import { Statblock } from "../components";

export default function buildTest() {
  const [componentEl, setComponents] = useState("");
  const [cardInfo, setCardInfo] = useState([]);



  function clearCards(){
    setComponents("");
  }
  
  //add a new card
  async function addCard(loc){
    // clears out the current cards
    await clearCards()
    // adds a new card to our arrays
    cardInfo.push({id:`card${cardInfo.length}`, text: "new card", location:loc,y:0, previousY:0 });
    //turning the card data to elements
    let cardEls = cardInfo.map((e,i)=>{
      let side = e.location ==="l"?"left-[5%]":"right-[5%]";
     return <Draggable   onStop={handleStop}  axis="y" grid={[20, 20]} scale={1}>
          <div style={{top:((e.previousY+e.y) + "%")}} id={`card${i}`} className={` absolute  ${side} w-2/5 h-1/4 border bg-red-400  `}>
          {e.text}
            
          </div>
          
        </Draggable>
    });

    console.log(cardInfo)
    setComponents(cardEls);
  }

  const handleStop = (event, dragElement) => {
    let currentEl = document.getElementById(dragElement.node.id)
    cardInfo.forEach((e,i)=>{
      if(e.id == dragElement.node.id){
        console.log("drag element y :", dragElement.y)
        e.y = (dragElement.y / document.getElementById('page').clientHeight * 100)
        console.log(e.y)
      }
    })
  };
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  async function print(){
    // push each element to top
    await cardInfo.forEach((e,i)=>{
      document.getElementById(e.id).style.transform = "translate(0,0)"
    })
    // put the 
    await cardInfo.forEach((e,i)=>{
      document.getElementById(e.id).style.top =  (e.previousY + e.y) + "%"
      e.previousY = e.previousY + e.y
      e.y = 0
      
    })
    
    handlePrint()
    await clearCards()
    //turning the card data to elements
    let cardEls = cardInfo.map((e,i)=>{
      let side = e.location ==="l"?"left-[5%]":"right-[5%]";
     return <Draggable   onStop={handleStop}  axis="y" grid={[20, 20]} scale={1}>
          <div style={{top:((e.previousY+e.y) + "%")}} id={`card${i}`} className={` absolute  ${side} w-2/5 h-1/4 border bg-red-400  `}>
            {e.text}
          </div>
        </Draggable>
    });
    setComponents(cardEls);

  }

  const componentRef = useRef();
  return (
    <>
      <div className="flex justify-center items-center h-screen">
    <div>
      <div className="flex justify-around">
      <button className="border" onClick={() => addCard("r")}>
          add right
        </button>
        <br />
        <button className="border" onClick={() => addCard("l")}>add left </button>
        <button onClick={()=> print()}>print</button>
        <button onClick={()=>clearEl()}>clear</button>
      </div>
    <div
      id="page"
      className=" w-[65vh] h-[85vh]   overflow-hidden    relative border "
       
    >
      <div ref={componentRef} className='h-auto w-auto' >
        {componentEl}
        
        </div>
        
    </div>
    </div>
  </div>
  
    </>
  );
}
