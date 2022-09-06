import React, { useEffect, useState } from "react";
import { Page } from "../components";
import { Statblock } from "../components";
import { Textblock } from "../components/textblock/Textblock";

export const MonsterRenderBlock = () => {
  const [currentMonster, setCurrentMonster] = useState(0);
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const monsters = [];
    const storedObject = localStorage.getItem("monsters");
    if (storedObject !== null) {
      monsters.push(...JSON.parse(storedObject));
    }
    setMonsters(monsters);
  }, []);

  return (
    <div>
      {monsters.length > 0 ? <Statblock {...monsters[currentMonster]} /> : null}
    </div>
  );
};

const defaultLayoutForData = (key) => {
  let layout = [];
  const storedObject = localStorage.getItem(key);
  if (storedObject === null) {
    return layout;
  }

  const components = JSON.parse(storedObject);
  Object.entries(components).map(([k, v]) => {
    layout.push({ id: k, type: key, data: v });
  });

  return layout;
};

export const RenderBlock = () => {
  const [layoutData, setLayoutData] = useState([]);

  useEffect(() => {
    const layout = [];
    const storedObject = localStorage.getItem("layout");
    if (storedObject !== null) {
      layout.push(...JSON.parse(storedObject));
      setLayoutData([...layout]);
    } else {
      // Load Monsters
      layout.push(...defaultLayoutForData("monsters"));
      // Load Texts
      layout.push(...defaultLayoutForData("texts"));
      setLayoutData([...layout]);
    }
  }, []);

  const moveUp = (index) => {
    if (index === 0) return;

    const element = layoutData[index];
    layoutData.splice(index, 1);
    layoutData.splice(index - 1, 0, element);
    setLayoutData([...layoutData]);
  };

  const moveDown = (index) => {
    if (index === layoutData.length - 1) return;

    const element = layoutData[index];
    layoutData.splice(index, 1);
    layoutData.splice(index + 1, 0, element);
    setLayoutData([...layoutData]);
  };

  const remove = (index) => {
    layoutData.splice(index, 1);
    setLayoutData([...layoutData]);
  };

  return (
    <div className="flex flex-col gap-y-1">
      {layoutData?.map(({ id, type, data }, index) => {
        switch (type) {
          case "monsters":
            return (
              <div className="relative">
                <div className="text-xl flex gap-x-3 absolute right-2 top-3 z-10">
                  <button data-set-key={id} onClick={() => moveUp(index)}>
                    🔼
                  </button>
                  <button data-set-key={id} onClick={() => moveDown(index)}>
                    🔽
                  </button>
                  <button data-set-key={id} onClick={() => remove(index)}>
                    ❌
                  </button>
                </div>
                <Statblock {...data} key={id} />
              </div>
            );
          case "texts":
            return (
              <div className="relative">
                <div className="text-xl flex gap-x-3 absolute right-2 top-3 z-10">
                  <button data-set-key={id} onClick={() => moveUp(index)}>
                    🔼
                  </button>
                  <button data-set-key={id} onClick={() => moveDown(index)}>
                    🔽
                  </button>
                  <button data-set-key={id} onClick={() => remove(index)}>
                    ❌
                  </button>
                </div>
                <Textblock {...data} key={id} />
              </div>
            );
        }
      })}
    </div>
  );
};

const render = () => {
  return (
    <div className="w-screen ae-paper bg-center bg-no-repeat bg-cover flex justify-center z-0">
      <div className="w-11/12 z-10">
        <RenderBlock />
      </div>
    </div>
  );
};

export default render;
