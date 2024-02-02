import React, { ReactNode } from 'react'
import '../styles/style.scss'

interface Props{
    children: ReactNode
    title: string
    placeholder: string
    textButton:string
   
}
const Encabezado = ({title, placeholder, textButton, children}:Props) => {
  return (
    <div className="container">
      <div className='containaer__cabecera'>
        <h1>{title}</h1>
        <div className="add-task">
            <input type="text" placeholder={placeholder} className="input"/>
            <button  className="button_add">{textButton}</button>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Encabezado
