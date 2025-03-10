import axios from "axios";

export default
axios.create({
  baseURL:'https://gcahf.azurewebsites.net/api'
  //baseURL:"http://localhost:80/api"
});
