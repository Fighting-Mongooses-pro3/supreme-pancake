import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import ReactToPrint from "react-to-print";

export default function buildTest() {
  const [componentEl, setComponents] = useState("");
  const [cardInfo, setCardInfo] = useState([]);
  
  
  function addCard(loc){
    cardInfo.push({ text: "new card", location:loc });

    let cardEls = cardInfo.map((e)=>{
      let side = e.location ==="l"?"left-[5%]":"right-[5%]";
     return <Draggable axis="y" grid={[20, 20]} scale={1}>
          <div id="card1" className={`bg-red-300 absolute text-3xl ${side} w-2/5 h-1/4 border`}>
            {e.text}
          </div>
        </Draggable>
    });
    console.log(cardInfo)
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
        <ReactToPrint
        trigger={() => <button className="border">Print this out!</button>}
        content={() => componentRef.current}
      />
      </div>
    <div
      id="page"
      className=" w-[65vh] h-[85vh]   overflow-auto    relative border "
       
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
