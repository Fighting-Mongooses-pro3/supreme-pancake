import React, { useState, useEffect } from "react";
import axios from "axios";

export const MonsterCard = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/monsters").then((res) => {
      console.info('RESPONSE.DATA', res.data);
      console.info('RESPONSE.DATA.RESULTS', res.data.results)
      setMonsters(res.data.results);
      console.log(monsters);
    });
  }, []);

  const renderCards = () => {
    return monsters.map((monsters) => {
      return (
        <div
          key={monsters.index}
          className="ae-blog-card hover:scale-105 xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 sm:mx-0"
        >
          <div>
            <div className="shadow h-64 rounded-full relative">
              {monsters.index}
            </div>
            <div className="p-6 w-11/12 mx-auto -mt-24 bg-gray-900 rounded-3xl z-20 relative mb-4">
              <p className="uppercase text-sm text-lime-500 text-center pb-3 bg-transparent">
                {monsters.name}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className="text-white flex inline-flex max-w-screen">{renderCards()}</div>;
};
