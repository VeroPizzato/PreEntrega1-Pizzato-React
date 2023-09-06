import '../styles/ItemCount.css'
import { useState } from 'react'

const ItemCount = () => {
    const [stock, setStock]  = useState(50);
    const [cont, setCount] = useState(0);

    function agregarAlCarrito(cont) {
        if (cont <= stock){
            setStock(stock-cont);
        }
    }
    
    const onIncrease = () => {
        if (cont < stock){
            setCount(cont+1);
        }       
    }

    const onDecrease = () => {
        if (cont > 0){
            setCount(cont-1)
        }       
    }

    return (
        <div className="container">
            <div className="contador">
                    <button id="btnAgregar" onClick={onIncrease}>+</button>
                    <label id="cont-valor">{cont} </label>
                    <button id="btnSacar" onClick={onDecrease}>-</button>
            </div>
            {/* <button id="agregarAlCarrito" onClick={agregarAlCarrito(cont)}>Agregar al carrito</button> */}
            <button id="agregarAlCarrito" onClick={() => agregarAlCarrito(cont)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount; 