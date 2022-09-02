import React from 'react'

export const Sidebar = () => {
  return (
    <sidebar>
        <ul className="toolbar">
          <li><button id='text__generator'>Text</button></li>
          <li><button id='npc__generator'>NPC</button></li>
          <li><button id='monster__generator'>Monster</button></li>
          <li><button id='spell__generator'>Spell</button></li>
          <li><button id='import__image'>Image</button></li>
          <li><button id='past_components'>Prev. Component</button></li>
      </ul>
     
    </sidebar>
  )
}
