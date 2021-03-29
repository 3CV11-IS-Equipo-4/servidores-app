import Layout from "../Components/Layout";
import Card from "../Components/Card-blank";
import protect from '../utils/protect';

import { Link } from "react-router-dom";

function Success() {
    return(
        <Layout head={`Consultar solicitudes`}>
            <Card className="m-5" title="Inicia sesión" styling="flex-row">

                <h5>
                En el menú superior puedes acceder a las solicitudes.
                </h5>
            </Card>
            <Link to="/">Volver al inicio</Link> 
        </Layout>
    );
}

export default protect(Success);