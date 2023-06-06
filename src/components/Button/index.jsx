import React from 'react'

const Button = ({className, title, onClick}) => {
  return (
    <div onClick={onClick} className={`btn ${className && className}`}>{title}</div>
  )
}

export default Button