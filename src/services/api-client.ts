import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: 'a2679cbcad0e4fe78a38810b29807919'
    }
})