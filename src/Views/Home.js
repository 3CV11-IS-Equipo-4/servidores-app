import Layout from "../Components/Layout";
import Card from "../Components/Card-blank";
import payload from '../utils/payload';
import { Link } from "react-router-dom";
import img_pi from '../img/arbol.png' 

function Home() {
    const p = payload();

    return(
        <Layout head="Administración de poda de árboles">
            <div className="d-flex w-100 justify-content-around">
                { p ?
                <Card className="m-5" styling="flex-row">
                    <h5>
                    En el menú superior puedes acceder a las solicitudes.
                    </h5>
                </Card> :
                <Link to="/login">
                    <Card className="m-5">
                    <img src={img_pi} width="400"></img>
                    </Card>
                </Link>}
            </div>
        </Layout>
    );
}
export default Home;