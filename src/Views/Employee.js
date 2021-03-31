import Layout from '../Components/Layout';
import protect from '../utils/protect';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

function SolicitudDetail() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        const token = window.localStorage.getItem('token')
        const config = {
            headers:{
               Authorization: `Bearer ${token}` 
            }
        }
        axios.get('/'+id,config)
            .then(({data, status})=>{
                if(status === 200) {
                    setData(data);
                    console.log('data', data)
                }
            });
    }, []);
    return(
        <Layout head={data ? "Usuario" : ""}>
            <div>
                {data 
                ? 
                <div className="container  text-start">
                <div className="mb-4 mt-3">
                    <h3 className="mb-3">Datos del usuario</h3>
                    <div className="d-flex justify-content-between">
                        <div className="col-3">
                            <p className="fw-bold">Nombre(s):</p>
                            <p>{data.nombres}</p>
                        </div>
                        <div className="col-3">
                            <p className="fw-bold">Apellido paterno:</p>
                            <p>{data.apellido_paterno}</p>
                        </div>
                        <div className="col-3">
                            <p className="fw-bold">Apellido materno:</p>
                            <p>{data.apellido_materno}</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="col-3">
                            <p className="fw-bold">Correo electrónico:</p>
                            <p>{data.email}</p>
                        </div>
                        <div className="col-3">
                            <p className="fw-bold">Alcaldia :</p>
                            <p>{data.alcaldia}</p>
                        </div>
                        <div className="col-3">
                            <p className="fw-bold">Rol:</p>
                            <p>{data.rol}</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="col-3">
                            <p className="fw-bold">Permiso Administrador:</p>
                            <p>{data.permiso_admin}</p>
                        </div>
                    </div>
                </div>
            </div>
                :''}
            </div>
        </Layout>
    );
}

export default protect(SolicitudDetail);