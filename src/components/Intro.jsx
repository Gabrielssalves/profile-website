import React, { useLayoutEffect } from 'react'
import gsap from 'gsap'
import './Intro.css'

const Intro = () => {

    const timeLine = gsap.timeline({ defaults: { ease: 'power1.out' } })

    useLayoutEffect(() => {
        timeLine.to('.text', { y: '0%', duration: 1, stagger: 0.25 })
        timeLine.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 })
        timeLine.to('.intro', { y: '-100%', duration: 1 }, "-=1.1")
        timeLine.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 })
        timeLine.fromTo('.page', { opacity: 0 }, { opacity: 1, duration: 1 })    
    })

    return (
        <React.Fragment>
            <div className="intro">
                <div className="intro-text">
                    <h1 className="hide">
                        <span className="text">I'm a developer</span>
                    </h1>
                    <h1 className="hide">
                        <span className="text">and i love</span>
                    </h1>
                    <h1 className="hide">
                        <span className="text">coffe.</span>
                    </h1>
                </div>
            </div>
            <div className="slider"></div>
        </React.Fragment>
    )
}

export default Intro