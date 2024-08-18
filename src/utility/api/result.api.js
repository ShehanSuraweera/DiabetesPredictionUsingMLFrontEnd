import axios from "axios";

const BASE_API = axios.create({
  baseURL: "https://dehemi2001.pythonanywhere.com",
});

async function result(data) {
  return await BASE_API.post("/result", data);
}

export { result };
