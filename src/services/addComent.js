import axios from 'axios';
import constante from '../constantes'

export default (data) => {
    console.log(data);
    return axios.post(constante.url,data);
}