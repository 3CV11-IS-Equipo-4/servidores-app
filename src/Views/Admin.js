import Table from '../Components/Table';
import { tables } from '../utils/const';
import Layout from '../Components/Layout';
import protect from '../utils/protect';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

function Admin() {
    const [data, setData] = useState(null);

    const permisoUser = ({_id,permiso_administrador}) => {
        const token = window.localStorage.getItem('token')
        const config = {
            headers:{
               Authorization: `Bearer ${token}` 
            }
        }
        axios.patch('https://poda-api.herokuapp.com/usuarios/' + _id, { permiso_administrador: !permiso_administrador}, config)
            .then(({data, status})=>{
                window.location.reload();
            });
    };
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
        getData();
    },[]);
    return(
        <Layout>
            <div className="d-flex justify-content-between w-100 h-100">
                {data
                ?<Table cols={tables.Admin} datos={data} permisoUser={permisoUser} activoUser={activoUser}></Table>
                : ''}
            </div>
        </Layout>
    );
}
export default protect(Admin);