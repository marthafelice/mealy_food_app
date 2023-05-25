import React from 'react'

export default function CustomHeader({heading,subtitle}) {
  return (
    <div>
        <h1>{heading}</h1>
        <p>{subtitle}</p>
    </div>
  )
}
