import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { useReactToPrint } from 'react-to-print';

export default function buildTest() {
  const [componentEl, setComponents] = useState("");
  const [cardInfo, setCardInfo] = useState([]);
  
  
  function addCard(loc){
    cardInfo.push({id:`card${cardInfo.length}`, text: "new card", location:loc,y:null });

    let cardEls = cardInfo.map((e,i)=>{
      let side = e.location ==="l"?"left-[5%]":"right-[5%]";
     return <Draggable   onStop={handleStop}  axis="y" grid={[20, 20]} scale={1}>
          <div id={`card${i}`} className={`bg-red-300 absolute text-3xl ${side} w-2/5 h-1/4 border`}>
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
        console.log("page y :", document.getElementById('page').clientHeight)
        console.log("distance y :",dragElement.y)
        e.y = (dragElement.y / document.getElementById('page').clientHeight * 100) + '%'
        console.log(e)
      }
    })
  };
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  async function print(){
    await cardInfo.forEach((e,i)=>{
      document.getElementById(e.id).style.transform = "translate(0,0)"
    })
    await cardInfo.forEach((e,i)=>{
      document.getElementById(e.id).style.top = e.y
    })
    
    handlePrint()
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
