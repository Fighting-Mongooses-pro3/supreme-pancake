import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import { useReactToPrint } from "react-to-print";
import { Statblock } from "..";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default function BuildRender() {
  const [componentEl, setComponents] = useState();
  const [cardInfo, setCardInfo] = useState([]);
  const exportPdf = () => {

    html2canvas(document.querySelector("#page1")).then(canvas => {
       const imgData = canvas.toDataURL('image/png');
       const pdf = new jsPDF();
       const imgProps= pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

       pdf.save("download.pdf"); 
   });

}
  function clearCards() { 
    setComponents("");
  }

  //add a new card
  async function addCard() {
    // clears out the current cards
    await clearCards();
    // adds a new card to our arrays
    cardInfo.push({
      id: `card${cardInfo.length}`,
      text: "new card",
      y: 0,
      previousY: 0,
    });
    //turning the card data to elements
    let cardEls = cardInfo.map((e, i) => {
      return (
        
            <Statblock
          key={i}
          monName={"abbanith-giant"}
          size={"Large"}
          armor_class={13}
          hit_points={76}
          speed={15}
          strength={20}
          dexterity={9}
          constitution={17}
          intelligence={10}
          wisdom={13}
          charisma={11}
          // senses={mon.senses}
          languages={"Giant, Terran"}
          challenge={3}
        />
        
      );
    });

    console.log(cardInfo);
    setComponents(cardEls);
  }

  const handleStop = (event, dragElement) => {
    let currentEl = document.getElementById(dragElement.node.id);
    cardInfo.forEach((e, i) => {
      if (e.id == dragElement.node.id) {
        console.log("drag element y :", dragElement.y);
        e.y =
          (dragElement.y / document.getElementById("page").clientHeight) * 100;
        console.log(e.y);
      }
    });}

    const printRef = useRef();

    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    async function print() {
      // // push each element to top
      // await cardInfo.forEach((e, i) => {
      //   document.getElementById(e.id).style.transform = "translate(0,0)";
      // });
      // // put the
      // await cardInfo.forEach((e, i) => {
      //   document.getElementById(e.id).style.top = e.previousY + e.y + "%";
      //   e.previousY = e.previousY + e.y;
      //   e.y = 0;
      // });

      await handlePrint();
      await clearCards();
      //turning the card data to elements
      let cardEls = cardInfo.map((e, i) => {
        return (
          
              <Statblock
            key={i}
            monName={"abbanith-giant"}
            size={"Large"}
            armor_class={13}
            hit_points={76}
            speed={15}
            strength={20}
            dexterity={9}
            constitution={17}
            intelligence={10}
            wisdom={13}
            charisma={11}
            // senses={mon.senses}
            languages={"Giant, Terran"}
            challenge={3}
          />
          
        );
      });
      setComponents(cardEls);
    }

    const componentRef = useRef();
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <div>
            <div className="flex justify-around">
              <br />
              <button className="border" onClick={() => addCard()}>
                add monster
              </button>
              <button onClick={() => exportPdf()}>print</button>
              <button onClick={() => clearEl()}>clear</button>
            </div>
            <div
              
              className=" w-[75vh] h-[85vh] flex justify-center  overflow-hidden    relative  "
            >
              <div id="page" className="h-full  w-full border">

                <div className="flex justify-around flex-col flex-wrap border border-red-300 ">
                {componentEl}
        
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
