import Layout from "../Components/Layout";
import Card from "../Components/Card-blank";
import Form from '../Components/Form';
import { logins } from '../utils/const';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Login() {
    const history = useHistory();

    const login = (inputs) => {
        console.log('Login');
        axios.post('https://poda-api.herokuapp.com/login/usuarios', 
            {...inputs }
        )
            .then(({ data , status})=> {
                if(status === 200) {
                    window.localStorage.setItem('token', data.key);
                    history.push('/');
                }
                // dependiendo del rol redireccionar
            })
            .catch(error => {
                console.log('Error', error.message);
            });
    };

    return(
        <Layout head={``} type='ciudadano'>
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