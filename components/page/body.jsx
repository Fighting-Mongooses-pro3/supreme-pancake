import React from 'react'

export const Body = (props) => {
  return (
    <div className={`${props.customCss}`}>
        {props.body}
    </div>
  )
}
