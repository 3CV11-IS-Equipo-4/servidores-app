import Table from '../Components/Table';
import { tables } from '../utils/const';
import Layout from '../Components/Layout';
import { useHistory } from "react-router-dom";
import Button from '../Components/Button';
import protect from '../utils/protect';

function Admin() {
    const history = useHistory();
    return(
        <Layout>
            <div className="d-flex justify-content-between w-100 h-100">
                <Table cols={tables.Admin} datos={tables.ejemploAdmin}></Table>
            </div>
            <Button styling="success" type="button" click={() => history.push('/logout')} text="Cerrar Sesión"></Button>
        </Layout>
    );
}
export default protect(Admin);