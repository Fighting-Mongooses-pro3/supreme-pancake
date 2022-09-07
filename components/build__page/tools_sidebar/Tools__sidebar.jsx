import React from "react";
import { BsTextParagraph } from "react-icons/bs";
import { GiMonsterGrasp } from "react-icons/gi";
import { GiScrollUnfurled } from "react-icons/gi";
import { BsCardImage } from "react-icons/bs";
import { GiMagicAxe } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";

export const ToolsSidebar = () => {
  return (
    <div className="min-h-screen w-2/12 text-black border border-black">
      <ul className="toolbar w-full h-full text-black">
        <li>
          <button className='border border-black text-black' >NPC {<GiMonsterGrasp />}</button>
        </li>
        <li>
          <button id="add__NPC" text="NPC" icon={<FaUsers />} />
        </li>
        <li>
          <button id="add__monster" text="Monster" icon={<GiMonsterGrasp />} />
        </li>
        <li>
          <button id="add__spell" text="Spell" icon={<GiScrollUnfurled />} />
        </li>
        <li>
          <button id="add--item" text="Magic Item" icon={<GiMagicAxe />} />
        </li>
        <li>
          <button id="import__image" text="Image" icon={<BsCardImage />} />
        </li>
        <li>
          <button
            id="my__components"
            text="My Components"
            icon={<AiFillFolderOpen />}
          />
        </li>
      </ul>
    </div>
  );
};
