import React from 'react'
import { elements } from '../../data/elements.js'
import { ElementButton } from '../../components/ElementButton/ElementButton.jsx'

const ControlMenu = props => {
  return (
    <div>
      {elements.map(item => (
        <ElementButton {...item} />
      ))}
    </div>
  )
}

export default ControlMenu