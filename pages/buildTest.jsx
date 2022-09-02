import React, { useState, useRef  } from 'react'
import Draggable from 'react-draggable';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';


export default function buildTest() {
  let page;
   let gridX;
   let cardX;
   let card1;
  if(typeof window !== "undefined"){
    page = document.getElementById("page")
    gridX = (document.getElementById("page").clientWidth)
    cardX = Math.round(gridX*.40)
    card1 = document.getElementById("card1")
  }
  const [componentEl, setComponents] = useState();
  const [cardInfo, setCardInfo] = useState([]);
  // let cardInfo = []

  function addCard(){
    cardInfo.push({text:"new card"})
    
    let cardEls = cardInfo.map(e=>{return <Draggable grid={[gridX/2, 20]} scale={1}><div id='card1'  className='absolute text-5xl left-5  w-2/5 h-1/4 border'>{e.text}<br/><span className='text-lg'>here is some body text</span></div></Draggable> })
    setComponents(cardEls)
  }

 
  const printRef = useRef();

  const downloadPDF = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/pdf');

    const pdf = new jsPDF();
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(data, 'pdf', 0, 0, pdfWidth, pdfHeight);
    pdf.save('DnD.pdf');
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div>
      <button className='border' onClick={()=>addCard()}>add</button><br />
      <button className='border' onClick={()=>downloadPDF()}>save pdf</button>
      </div>

    <div id='page'  ref={printRef} className=' w-[92vh] h-[120vh]  overflow-hidden relative   border '>

    {componentEl}
    
  </div>
    </div>
    
    
  )
}
