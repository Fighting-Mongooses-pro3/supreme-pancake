import { useState, useEffect, useRef } from "react";
import {}
export default function Rotating__background() {
  const img1 = "../../public/landing__images/background-3390802_1920.jpg";
  const img2 = "../../public/landing__images/book-gaa6361739_1920.jpg";
  const img3 = "https://dummyimage.com/400x200/077d32/e3e4e8.png";

  let [lsNum, setLsNum] = useState(0);
  // Absolute number '1'
  let count = useRef(1);

  const list = [img1, img2, img3];

  useEffect(() => {
    // Get value from localStorage, transform to number
    const lS = Number(localStorage.getItem("image"));
    // Check! If localStorage have number 2 / more
    // Set number 0
    if (lS >= 2) {
      localStorage.setItem("image", 0);
      return;
    }
    // Get absolute number and increase with number from localStorage
    count.current = count.current + lS;
    // Set result to state
    setLsNum(count.current);
    // Set the resulting number to localStorage
    localStorage.setItem("image", count.current);
  }, []);

  const css = {
    height: "200px",
    width: "400px",
    display: "block",
    backgroundImage: `url(${list[lsNum]})`, // index change
    backgroundPosition: "center",
    backgroundSize: "cover",
    border: "1px solid red"
  };

  return (
    <div className="App">
      <div style={css}></div>
    </div>
  );
}