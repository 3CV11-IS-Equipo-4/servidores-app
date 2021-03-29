import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Layout from '../Components/Layout';
import Form from '../Components/Form';
import { publica, privado } from '../utils/const';
import { useEffect, useState } from 'react';

export default function Solicitud(){

    let { id } = useParams();
 
    const [inputsData, setInputsData] = useState([]);
    const changePage = (inputs) => {
            console.log('Ya no debo avanzar');
            axios.post('https://podayderribo-cdmx.herokuapp.com/solicitudes/', {...inputs })
            .then(({response})=>{

            })
            .catch(e => {

            });
        }
    /*     useEffect(() => {
        const token = window.localStorage.getItem('token');
        if(token) {
            const config = {
                headers: {
                    'Authorization': `JWT ${token}`
                }
            }
            axios.get('http://localhost:9000/quotes', config)
                .then(({data, status}) => {
                    console.log(data, status);
                    setQuote(data);
                })
                .catch(error => {
                    console.error(error.response.data);
                })
        } else {
            history.push('/');
        }
    }, []); */

    return (
        <Layout head={`Solicitud en `}>
        <Form inputsData={inputsData} submit={changePage} styling="success" textBtn="Siguiente">
        </Form>
        <Link to="/">Volver al inicio</Link> 
    </Layout>);
}