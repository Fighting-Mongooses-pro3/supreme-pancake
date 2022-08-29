import React from 'react'

export const Aside = (props) => {
  return (
    <div className={`${props.customCss} `}>
        {props.side}
    </div>
  )
}
