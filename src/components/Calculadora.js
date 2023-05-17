import { useState } from 'react'
import './Calculadora.css'

    function Calculadora() {
        
        const [numeroInicial, SetNumeroInicial] = useState(0)
        function inputNum(e){
            let input=e.target.value
            if (numeroInicial===0) {
                SetNumeroInicial(input);
            }else{
                SetNumeroInicial(numeroInicial + input);

            }
        }

        function clear(){
            SetNumeroInicial(0)
        }


        return(
            <div className="main">
                
                <span className='resultado'> {numeroInicial} </span>
                <div>
                    <button className='Operation' onClick={"+"}>+</button>
                    <button className='Operation' onClick={"-"}>-</button>
                    <button className='Operation' onClick={"*"}>x</button>
                    <button className='Operation' onClick={"/"}>/</button>                    
                    <button onClick={inputNum} value={7}>7</button>
                    <button onClick={inputNum} value={8}>8</button>
                    <button onClick={inputNum} value={9}>9</button>
                    <button onClick={inputNum} value={0}>0</button>
                    <button onClick={inputNum} value={4}>4</button>
                    <button onClick={inputNum} value={5}>5</button>
                    <button onClick={inputNum} value={6}>6</button>
                    <button className='Operation' onClick={clear}>C</button>
                    <button onClick={inputNum} value={1}>1</button>
                    <button onClick={inputNum} value={2}>2</button>
                    <button onClick={inputNum} value={3}>3</button>
                    <button className='Operation'onClick={"="}>=</button>
                </div>
            </div>
        )

    }
export default Calculadora


   