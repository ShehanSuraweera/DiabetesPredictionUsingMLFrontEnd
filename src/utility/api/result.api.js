import axios from "axios";

const BASE_API = axios.create({ baseURL: "http://127.0.0.1:5000" });

async function result(data) {
  return await BASE_API.post("/result", data);
}

export { result };
