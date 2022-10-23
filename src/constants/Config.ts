
interface ConfigInterface {
    connector_script : string;
    connector_script_id: string ;
}

const Config : ConfigInterface = {
    connector_script : 'https://connect.bingewave.com/connect.js',
    connector_script_id : 'bw_connector'
}

export default Config;