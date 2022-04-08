import axios from 'axios';
// import convertArrayToQuery from "../utils/ConvertArrayToQuery";
// import {toast} from "react-toastify";

const gatewayUrl = "http://localhost:8080";

class Gateway {

  async roteador(args) {
    const token = localStorage.getItem('token');
    try {
      // console.log(args.query);
      const response = await axios({
        method: args.method,
        crossDomain: true,
        headers: Object.assign(args.headers || {}, {
          authorization: `Bearer ${
            args.token ? args.token : token ? token : ''
          }`,
          'Access-Control-Allow-Origin': '*',
        }),
        url: `${gatewayUrl}/${args.url}`,
        data: args.data || {},
      });
      return { status: response.status, data: response.data, header: response.headers };
    } catch (error) {
      if (error.response) {
        // console.log(error.response);
        if (error.response.status === 406) {
          console.log('error 406');
        }
        if (error.response.status === 401) {
          if(token) {
            console.log('error 401');
          }
        } else if (error.response.status === 403) {
          return console.log('error 403');
        } else {
        }
        return { status: error.response.status, data: error.response.data };
      }
      if (error.request) {
        return { status: 404, data: error.request.data };
      }

      return { status: 500, data: error.stack };
    }
  }
}
export default new Gateway();
