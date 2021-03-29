import Table from '../Components/Table';
import { tables } from '../utils/const';
import Layout from '../Components/Layout';
import { useHistory } from "react-router-dom";
import protect from '../utils/protect';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Admin() {
    const [data, setData] = useState(null);
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
                    setData(data.usuarios);
                }
            });
    },[]);
    return(
        <Layout>
            <div className="d-flex justify-content-between w-100 h-100">
                {data
                ?<Table cols={tables.Admin} datos={data}></Table>
                : ''}
            </div>
        </Layout>
    );
}
export default protect(Admin);