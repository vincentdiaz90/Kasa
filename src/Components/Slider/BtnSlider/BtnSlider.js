import React from 'react'
import './BtnSlider.css'
import leftChevron from './chevron-droit.png'
import rightChevron from './chevron-gauche.png'

export default function BtnSlider(props) {

    const {direction, moveSlide} = props

  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
        <img src={direction === "next" ? rightChevron : leftChevron} alt="chevron" />
    </button>
  )
}
