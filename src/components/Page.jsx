import React from 'react'
import './Page.css'

export default (props) => {
    return (
        <div className="page">
            <div className="page-header">
                {props.header}
            </div>
            <div className="page-body">
                {props.body}
            </div>
        </div>
    )
}