import CartWidget from "./CartWidget"
import Logo from "../img/logo.png"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="Logo" style={{width:200, height:112}} className="d-inline-block align-text-top" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active typo-menu" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link typo-menu" href="#">Variedades</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link typo-menu" href="#">Tienda</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link typo-menu" href="#">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link typo-menu" href="#">Contacto</a>
                            </li>                          
                        </ul>
                    </div>
                    <div>
                        <CartWidget />                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
