import Table from '../Components/Table';
import { tables } from '../utils/const';
import Layout from '../Components/Layout';
import protect from '../utils/protect';

function AreaBoss() {
    return(
        <Layout>
            <div className="d-flex justify-content-between w-100 h-100">
                <Table cols={tables.jefeArea} datos={tables.ejemploJA}></Table>
            </div>
        </Layout>
    );
}

export default protect(AreaBoss);