/* eslint-disable no-unused-vars */
import axios from "axios";
const local = "https://ecom-api-swart.vercel.app";
const production = "https://ecom-api-swart.vercel.app";

let api_url = "";
let mode = "pro";

if (mode === "dev") {
  api_url = production;
} else {
  api_url = local;
}
const api = axios.create({
  baseURL: `${api_url}/api`,
  withCredentials: true,
});
export default api;
