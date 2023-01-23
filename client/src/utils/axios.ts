import axios from "axios";

const instance = axios.create({
  //// создаем инстанс с адрес строкой что-бы не вводить ее при каждом запросе
  baseURL: "http://localhost:3003",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token"); //// к каждому запросу будем добавлять хедер с нашим токеном
  
   return config
});

export default instance;