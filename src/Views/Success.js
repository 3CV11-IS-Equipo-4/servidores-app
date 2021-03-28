import Layout from "../Components/Layout";
import Card from "../Components/Card-blank";

import { Link } from "react-router-dom";

export default function Success() {
    return(
        <Layout head={`Consultar solicitudes`}>
            <Card className="m-5" title="Inicia sesión" styling="flex-row">

                <h2>
                Se te envió un correo con tu usuario y contraseña para ver el estado de tu solicitud
                </h2>
            </Card>
            <Link to="/">Volver al inicio</Link> 
        </Layout>
    );
}