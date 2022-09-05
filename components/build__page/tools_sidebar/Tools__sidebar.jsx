import React from 'react'
import {BsTextParagraph} from 'react-icons/bs'
import {GiMonsterGrasp} from 'react-icons/gi'
import {GiScrollUnfurled} from 'react-icons/gi'
import {BsCardImage} from 'react-icons/bs'
import {GiMagicAxe} from 'react-icons/gi'
import { FaUsers} from "react-icons/fa";
import {AiFillFolderOpen} from "react-icons/ai";
export const Tools__sidebar = () => {
  return (
    <Tools__sidebar>
        <ul className="toolbar">
          <li>
            <button 
              id='add__text'
              text='Text'
              icon={< BsTextParagraph />}
              /></li>
          <li><button 
              id='add__NPC'
              text='NPC'
              icon={< FaUsers />}
              /></li>
          <li><button 
              id='add__monster'
              text='Monster'
              icon={< GiMonsterGrasp />}
              /></li>
          <li><button 
              id='add__spell'
              text='Spell'
              icon={< GiScrollUnfurled />} 
              /></li>
              <li><button 
              id='add--item'
              text='Magic Item'
              icon={< GiMagicAxe />} 
              /></li>
          <li><button 
              id='import__image'
              text='Image'
              icon={< BsCardImage />}
              /></li>
          <li><button 
              id='my__components'
              text='My Components'
              icon={< AiFillFolderOpen />}
              /></li>
      </ul>
     
    </Tools__sidebar>
  )
}
