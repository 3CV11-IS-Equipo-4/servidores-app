import Table from '../Components/Table';
import { tables } from '../utils/const';
import protect from '../utils/protect';
import Layout from '../Components/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

function PartsOfficer() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const token = window.localStorage.getItem('token')
        const config = {
            headers:{
               Authorization: `Bearer ${token}` 
            }
        }
        axios.get('https://poda-api.herokuapp.com/solicitudes/usuarios/',config)
            .then(({data, status})=>{
                if(status === 200) {
                    setData(data.solicitudes);
                }
            });
    },[]);
    return(
        <Layout>
            {data ? <div className="d-flex justify-content-between w-100 h-100">
                <Table cols={tables.oficialiaPartes} datos={data}></Table>
            </div>: ''}
        </Layout>
    );
}

export default protect(PartsOfficer);