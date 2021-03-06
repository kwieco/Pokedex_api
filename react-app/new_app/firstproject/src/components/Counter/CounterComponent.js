import React, {useState } from 'react'
import styled from 'styled-components'

export const MainCounterBox = styled.div`
     display: flex;
    align-content: stretch;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    `


const ValueComponent = styled.div`
    display: grid;
    background:  ${({ value }) => (value % 5 === 0 && value !== 0 ? "green" : "#000")};
    color: #ffff00;
    border: 0px solid #ffff00;
    border-radius: 12px;
    margin-top:20px;  
    padding: 20px;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
    font-size: 24px;
    `
    
const ButtonComponent = styled.div`
    display: grid;
    justify-content: center;
    font-family: sans-serif;
    font-size: 24px;

    `   
const Button = styled.button`
    background-color: #000;
    color: #ffff00;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;

    &:hover {
        background-color: #ffff00;
        color: #000;
    }
    `


function CounterComponent( { defaultValue = 0, step = 1 }) {   
    
    const [value, setValue] = useState(defaultValue)

    // const beGreen = () => {
    //     if (value % 5 === 0 && value !== 0 ){
    //         return <ValueComponentGreen>{value}</ValueComponentGreen>
    //     } else {
    //         return <ValueComponent>{value}</ValueComponent>
    //     }
        
    // }

    
    
    

    const minus = () => {
        setValue(value - step)
    }

    const add = () => {
        setValue(value + step)
    }

    const reset = () => {
        setValue(0)
    }
    
     return (
         <>
        
            <ValueComponent value={value}>{value}</ValueComponent>
                <ButtonComponent> 

                    <Button onClick={minus} id='minus'> - </Button>

                    <Button onClick={reset} id='reset'> Reset </Button>

                    <Button onClick={add} id='add'> + </Button>

                </ButtonComponent>
        </>
    )
}

export default CounterComponent
