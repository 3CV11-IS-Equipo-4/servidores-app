import Table from '../Components/Table';
import { tables } from '../utils/const';
import protect from '../utils/protect';
import Layout from '../Components/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Dictator() {
    const [data, setData] = useState(null);
    const aceptar = ({_id}) => {
        const token = window.localStorage.getItem('token')
        const config = {
            headers:{
               Authorization: `Bearer ${token}` 
            }
        }
        axios.patch('https://poda-api.herokuapp.com/solicitudes/' + _id, { aceptada: true }, config)
            .then(({data, status})=>{
                window.location.reload();
            })
            .catch(error => {
                alert( error.response.data.error);
            });
    };
    const denegar = ({_id}) => {
        const token = window.localStorage.getItem('token')
        const config = {
            headers:{
               Authorization: `Bearer ${token}` 
            }
        }
        axios.patch('https://poda-api.herokuapp.com/solicitudes/' + _id, { aceptada: false }, config)
            .then(({data, status})=>{
                window.location.reload();
            })
            .catch(error => {
                alert( error.response.data.error);
            });
    };
    const getData = () => {
        const token = window.localStorage.getItem('token')
        const config = {
            headers:{
               Authorization: `Bearer ${token}` 
            }
        }
        axios.get('https://poda-api.herokuapp.com/solicitudes/usuarios/',config)
            .then(({data, status})=>{
                if(status === 200) {
                    setData(data.solicitudes.map(a=>a));
                }
            })
            .catch(error => {
                alert( error.response.data.error);
            });
    };
    useEffect(() => {
        getData();
    }, []);    return(
        <Layout>
            <div className="d-flex justify-content-between w-100 h-100">
                {data ? <div className="d-flex justify-content-between w-100 h-100">
                <Table cols={tables.dictaminador} datos={data} aceptar={aceptar} denegar={denegar}></Table>
            </div>: ''}
            </div>
        </Layout>
    );
}
export default protect(Dictator);