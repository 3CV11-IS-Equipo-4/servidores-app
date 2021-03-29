import Table from '../Components/Table';
import { tables } from '../utils/const';
import protect from '../utils/protect';
import Layout from '../Components/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Dictator() {
    const [data, setData] = useState(tables.ejemploDI);

    const activoUser = ({_id,usuario_activo}) => {
        const token = window.localStorage.getItem('token')
        const config = {
            headers:{
               Authorization: `Bearer ${token}` 
            }
        }
        axios.patch('https://poda-api.herokuapp.com/usuarios/' + _id, { usuario_activo: !usuario_activo}, config)
            .then(({data, status})=>{
                window.location.reload();
            });
    };
    const getData = () => {
        const token = window.localStorage.getItem('token')
        const config = {
            headers:{
               Authorization: `Bearer ${token}` 
            }
        }
        axios.get('https://poda-api.herokuapp.com/usuarios/',config)
            .then(({data, status})=>{
                if(status === 200) {
                    setData(data.usuarios.map(a=>a));
                }
            });
    };
    useEffect(() => {
        const token = window.localStorage.getItem('token')
        const config = {
            headers:{
               Authorization: `Bearer ${token}` 
            }
        }
        axios.get('https://poda-api.herokuapp.com/usuarios',config)
            .then(({data, status})=>{
                if(status === 200) {
                    setData(data);
                }
            });
    },[]);
    return(
        <Layout>
            <div className="d-flex justify-content-between w-100 h-100">
                <Table cols={tables.dictaminador} datos={data}></Table>
            </div>
        </Layout>
    );
}
export default protect(Dictator);