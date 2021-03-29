import logo from '../img/logocdmx.png'
import "./Navbar.css"
import payload from '../utils/payload';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar(){
    const p = payload();
    const selectSolicitudes = (rol) => {
        switch(rol) {
            case 'ROP':
                return <li className="nav-item">
                            <Link className="nav-link" to="/oficialiaPartes">Solicitudes</Link>
                    </li>;
            
            case 'JA':
                return <li className="nav-item">
                <Link className="nav-link" to="/jefeArea">Solicitudes</Link>
            </li>
            case 'DI':
                return <li className="nav-item">
                <Link className="nav-link" to="/dictaminador">Solicitudes</Link>
            </li>
            default:
                return "";
        }
    };
    return(
        <nav className="navbar bar">
            <div className="container-fluid conter">
                
                    <div className=" col-3 logo">
                    <Link to="/">
                        <img className="img-fluid" src={logo} alt="Logo ciudad de méxico"/>
                        </Link>
                    </div>
                
                <div className="col-8 title h-100">
                    { !p ? <div className="col-12 title d-flex justify-content-center h-100">
                        <h4>Administración de solicitudes de poda</h4>
                    </div> :  
                    <div>
                        <ul className="nav">
                        <li className="nav-item"><Link className="nav-link" to="/">
                            Home
                        </Link></li>
                            {
                                selectSolicitudes(p.sub.rol)
                            }
                            {p.sub.permiso_administrador ? <li className="nav-item">
                                <Link className="nav-link" to="/Admin">Usuarios</Link>
                            </li>:''}
                        </ul>
                    </div>
                    }
                </div>
            </div>
        </nav>
    );
}