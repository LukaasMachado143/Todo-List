import axios from "axios";
function getURL() {
  if (
    window.location.host.includes("192.168.18.22:8080") ||
    window.location.host.includes("localhost:8080") ||
    window.location.host.includes("192.168.18.21:8080")
  ) {
    return "http://localhost:3000";
  } else {
    return "https://back-end-todo-list-ygai.vercel.app/";
  }
}

const baseURL = getURL();

var api = axios.create({
  baseURL,
});

export default api;
