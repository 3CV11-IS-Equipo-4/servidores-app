import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout';
import Form from '../Components/Form';
import { addUserView } from '../utils/const';

export default function Solicitud(){
    const history = useHistory();

    const add_user = (inputs) => {
        console.log('Login');
        axios.post('https://podayderribo-cdmx.herokuapp.com/', {...inputs })
            .then(({response})=>{
                // dependiendo del rol redireccionar
            })
            .catch(e => {

            });
        history.push('jefeArea');
    };

    return (
        <Layout head={`Datos de usuario `}>
        <Form 
            inputsData={addUserView} 
            submit={add_user} 
            styling="success"
            textBtn="Siguiente">
        </Form>
        <Link to="/">Volver al inicio</Link> 
    </Layout>);
}