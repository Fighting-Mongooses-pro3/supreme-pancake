import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Statblock } from "../components";

export default function buildTest() {
  let page;
  let gridX;
  let cardX;
  let card1;
  if (typeof window !== "undefined") {
    page = document.getElementById("page");
    gridX = document.getElementById("page").clientWidth;
    cardX = Math.round(gridX * 0.4);
    card1 = document.getElementById("card1");
  }
  const [componentEl, setComponents] = useState();
  const [cardInfo, setCardInfo] = useState([]);
  // let cardInfo = []

  function addCard() {
    cardInfo.push({ text: "new card" });

    let cardEls = cardInfo.map((e, i) => {
      return (
        <Draggable grid={[gridX / 2, 20]} scale={1} key={i}>
          <div
            id="card1"
            className="absolute text-5xl left-5  w-2/5 h-1/4 border"
          >
            <Statblock
            customCss="w-64"
              name="Monster"
              sizes="Medium humanoid, any alignment"
              ac="10"
              hp="22, (5d8)"
              speed="30 ft."
              strength="1"
              dex="17 (+0)"
              con="13 (+0)"
              int="11 (+0)"
              wis="13 (+0)"
              cha="17 (+0)"
              senses="passive Perception 10"
              lang={e}
              challenge="1/4"
            />
          </div>
        </Draggable>
      );
    });
    setComponents(cardEls);
  }

  const printRef = useRef();

  const downloadPDF = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/pdf");

    const pdf = new jsPDF();
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(data, "pdf", 0, 0, pdfWidth, pdfHeight);
    pdf.save("DnD.pdf");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <button className="border" onClick={() => addCard()}>
          add
        </button>
        <br />
        <button className="border" onClick={() => downloadPDF()}>
          save pdf
        </button>
      </div>

      <div
        id="page"
        ref={printRef}
        className=" w-[92vh] h-[120vh]  overflow-hidden relative   border "
      >
        {componentEl}
      </div>
    </div>
  );
}