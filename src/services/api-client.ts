import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/games",
  params: {
    key: "164c39efd75d4591a70f1c938ec30913",
  },
});
