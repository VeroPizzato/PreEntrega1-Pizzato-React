import '../styles/ItemCount.css'

const ItemCount = () => {
    const [stockDisponible, setStockDisponible]  = useState(50);
    const [cont, setCount] = useState(0);

    agregarAlCarrito(() => {
        if (cont <= stockDisponible){
            onAdd();
        }
    })
    
    onAdd(() =>{
        setStockDisponible(stockDisponible-cont);
    })

    return (
        <div className="container">
            <div className="contador">
                    <button id="btnAgregar" onClick={setCount(cont+1)}>+</button>
                    <label id="cont-valor">0</label>
                    <button id="btnSacar" onClick={setCount(cont-1)}>-</button>
            </div>
            <button id="agregarAlCarrito" onClick={agregarAlCarrito()}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount; 