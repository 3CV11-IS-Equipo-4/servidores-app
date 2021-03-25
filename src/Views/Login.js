import Layout from "../Components/Layout";
import Card from "../Components/Card-blank";
import Form from '../Components/Form';
import { logins } from '../utils/const';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
export default function Home() {
    const history = useHistory();

    const login = (inputs) => {
        console.log('Login');
        axios.post('https://podayderribo-cdmx.herokuapp.com/', {...inputs })
            .then(({response})=>{
                // dependiendo del rol redireccionar
            })
            .catch(e => {

            });
        history.push('jefeArea');
    };

    return(
        <Layout head={`Consultar solicitudes`}>
            <Card className="m-5" title="Inicia sesión" styling="flex-row">

                <Form 
                inputsData={logins.loginEMView} 
                submit={login} 
                styling="success" 
                textBtn="Siguiente"
                stylingF="d-flex flex-row flex-wrap"
                stylingI="col-md-10">
                </Form>
            </Card>
            <Link to="/">Volver al inicio</Link> 
        </Layout>
    );
}