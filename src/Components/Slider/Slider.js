import React, { useState } from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider/BtnSlider'

export default function Slider(props) {
    const { images } = props

    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inProgress: false,
    })

    const nextSlide = () => {
        if (slideAnim.index !== images.length && !slideAnim.inProgress) {
            setSlideAnim({ index: slideAnim.index + 1, inProgress: true })

            setTimeout(() => {
                setSlideAnim({ index: slideAnim.index + 1, inProgress: false })
            }, 400)
        } else if (slideAnim.index === images.length && !slideAnim.inProgress) {
            setSlideAnim({ index: 1, inProgress: true })
            setTimeout(() => {
                setSlideAnim({ index: 1, inProgress: false })
            }, 400)
        }
    }
    const prevSlide = () => {
        if (slideAnim.index !== 1 && !slideAnim.inProgress) {
            setSlideAnim({ index: slideAnim.index - 1, inProgress: true })
            setTimeout(() => {
                setSlideAnim({ index: slideAnim.index - 1, inProgress: false })
            }, 400)
        } else if (slideAnim.index === 1 && !slideAnim.inProgress) {
            setSlideAnim({ index: images.length, inProgress: true })
            setTimeout(() => {
                setSlideAnim({ index: images.length, inProgress: false })
            }, 400)
        }
    }

    return (
        <>
            {images.length > 1 ? (
                <div className="container-slider">
                    {images.map((image, index) => {
                      console.log();
                        return (
                            <div
                                key={index}
                                className={
                                    slideAnim.index === index + 1
                                        ? 'slide active-anim'
                                        : 'slide'
                                }
                            >
                                <img src={image} alt={`présentation du bien`}></img>
                                <div className="container-number-image">
                                    <p>{`${index + 1} / ${images.length}`}</p>
                                </div>
                            </div>
                        )
                    })}
                    <BtnSlider moveSlide={prevSlide} direction={'prev'} />
                    <BtnSlider moveSlide={nextSlide} direction={'next'} />
                </div>
            ) : (
                <div className="container-slider">
                    {images.map((image, index) => {
                        return (
                            <div
                                key={index}
                                className={
                                    slideAnim.index === index + 1
                                        ? 'slide active-anim'
                                        : 'slide'
                                }
                            >
                                <img src={image} alt="présentation du bien"></img>
                                <div className="container-number-image"></div>
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    )
}
