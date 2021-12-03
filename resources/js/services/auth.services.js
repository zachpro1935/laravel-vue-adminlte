import ApiGateway from "../plugins/gateways";
import HttpClient  from "../plugins/httpClient";

var httpClient = new HttpClient(ApiGateway.localhost)
const prefix = '/auth';

export default {
  login: (postData) => httpClient.post(`${prefix}/login`, {}, postData),
  refreshToken: () => httpClient.post(`${prefix}/refresh-token`)
}