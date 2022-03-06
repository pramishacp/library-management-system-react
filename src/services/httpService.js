import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const methods = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
};

export default methods;
