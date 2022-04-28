import axios from "axios";

const publicKey = "efcf4c0acdb498157ec415c7e7899fc";
const privateKey = "68aab2e41c2e07df00de605567413b74832060a9";

const api = axios.create({
  baseURL: "https://sujeitoprogramador.com/",
});

export default api;
