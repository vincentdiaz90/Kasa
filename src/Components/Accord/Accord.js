import React, { useState, useRef, useEffect } from 'react'
import './Accord.css'
import Chevron from '../../assets/images/components/accord/Chevron.png'

export default function Accord(props) {
    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState()

    const toggleState = () => {
        setToggle(!toggle)
    }

    const refHeight = useRef()

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    return (
        <div className="accord">
            <div onClick={toggleState} className="accord-visible">
                <h2>{props.title}</h2>
                <img src={Chevron} alt="chevron" />
            </div>

            <div
                ref={refHeight}
                className={toggle ? 'accord-toggle animated' : 'accord-toggle'}
                style={{ height: toggle ? `${heightEl}` : 0 + 'px' }}
            >
                <p
                    className="accord-text"
                    aria-hidden={toggle ? 'true' : 'false'}
                >
                    {props.description}
                </p>
            </div>
        </div>
    )
}
