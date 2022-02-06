import axios from 'axios';

export const base_url = process.env.REACT_APP_API_URL || 'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/';

const Api = axios.create({
  baseURL: base_url
});

export default Api;
