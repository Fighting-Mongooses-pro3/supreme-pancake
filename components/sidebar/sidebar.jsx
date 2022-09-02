import React from 'react'
<FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
export const Sidebar = () => {
  return (
    <sidebar>
        <ul className="toolbar">
          <li>
            <button 
              id='add__text'
              text='Text'
              FontAwesomeIcon icon="fa-solid fa-pen-to-square"
              /></li>
          <li><button 
              id='add__NPC'
              text='NPC'
              FontAwesomeIcon icon="fa-solid fa-users"
              /></li>
          <li><button 
              id='add__monster'
              text='Monster'
              FontAwesomeIcon icon="fa-solid fa-dragon" 
              /></li>
          <li><button 
              id='add--spell'
              text='Spell'
              FontAwesomeIcon icon="fa-solid fa-scroll" 
              /></li>
          <li><button 
              id='import__image'
              text='Image'
              FontAwesomeIcon icon="fa-regular fa-image"
              /></li>
          <li><button 
              id='my__components'
              text='My Components'
              FontAwesomeIcon icon="fa-regular fa-folder-open"
              /></li>
      </ul>
     
    </sidebar>
  )
}
