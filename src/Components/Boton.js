import React from 'react'

export const Boton = ({texto, onClick, disabled, variante}) => {
    let clase = "boton "

    if (variante !== null) {
        clase += `${variante}`
    }

    if (disabled) {
      clase += "disabled "
    }

  return (
    <button className={clase} onClick={onClick} disabled={disabled}>{texto}</button>
  )
}
