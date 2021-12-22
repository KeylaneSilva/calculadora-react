import React, {Component } from 'react'
import './Calculadora.css'

import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculadora extends Component {
    
    clearMemory(){
        console.log('limpar')
    }

    setOperation(op){
        console.log(op)
    }

    addDigit(n){
        console.log(n)
    }
    
    render(){
        // invocando funções
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)

        return (
            <div className='calculadora'>
                <Display value={100}/>
                
                <Button label="AC" click={() => this.clearMemory()}
                double />
                <Button label="/" click={setOperation} operation/>
                <Button label="7" click={addDigit}/>
                <Button label="8" click={addDigit}/>
                <Button label="9" click={addDigit}/>
                <Button label="*" click={setOperation}/>
                <Button label="4" click={addDigit}/>
                <Button label="5" click={addDigit}/>
                <Button label="6" click={addDigit}/>
                <Button label="-" click={setOperation}/>
                <Button label="1" click={addDigit}/>
                <Button label="2" click={addDigit}/>
                <Button label="3" click={addDigit}/>
                <Button label="+" click={setOperation}/>
                <Button label="0" click={addDigit}/>
                <Button label="." click={addDigit}/>
                <Button label="=" click={setOperation}/>             

            </div>
    )
    }
}
