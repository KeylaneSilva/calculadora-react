import React from 'react'
import './Button.css'

export default function Button(props) {
    // condicional para as classe
    
    let classes = 'button '
    // classes += props.operation ? console.log('entrou aqui operation') : console.log('operation')
    // classes += props.double ? 'double' : console.log('double')
    // classes += props.triple ? console.log('entrou aqui triple') : console.log('triple')    
    
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
