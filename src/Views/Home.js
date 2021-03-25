import Layout from "../Components/Layout";
import Card from "../Components/Card-blank";
import { Link } from "react-router-dom";
import img_pi from '../img/arbol.png' 


export default function Home() {
    return(
        <Layout head="Elige tu trámite">
            <div className="d-flex w-100 justify-content-around">
            <Link to="login"><Card className="m-5">
                <img src={img_pi} width="400"></img>
                </Card></Link>
            </div>
        </Layout>
    );
}