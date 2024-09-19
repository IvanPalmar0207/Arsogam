//React-Router-Dom
import { Link } from 'react-router-dom'
//Style
import './style/navbar.css'

function Navbar(){
    return(
        <nav>
            <div>Icon</div>
            <div>
                <ul>
                    <li>
                        <Link to = '/' >Inicio</Link>
                    </li>
                    <li>
                        <Link to = 'KhowUs' >Conocenos</Link>
                    </li>
                    <li>
                        <Link to = 'Events'>Eventos</Link>
                    </li>
                    <li>
                        <Link to = 'Services'>Servicios</Link>
                    </li>
                    <li>
                        <Link to = 'News' >Noticias</Link>
                    </li>
                    <li>
                        <Link to = 'PQRS' >Pqrs</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar