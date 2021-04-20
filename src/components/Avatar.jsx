import React from 'react'
import './Avatar.css'
import profileImg from '../assets/Profile.jpg'

const Avatar = () => {

    return (
        <div className="avatar">
            <img src={profileImg} alt=""/>
        </div>
    )
}

export default Avatar