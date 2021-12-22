import React from 'react'
import './Button.css'

export default function Button(props) {
    // condicional para as classe
    
    let classes = 'button '
    classes += props.operation ? 'button operation' : console.log('operation')
    classes += props.double ? 'double' : console.log('double')
    classes += props.triple ? 'triple' : console.log('triple')    
    
    return (
        <div>
            <button
                onClick={(e) => props.click && props.click(props.label)}
                className={classes}>
                {props.label}
              </button>
        </div>
    )
}
