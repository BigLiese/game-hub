import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "ea2ab517395a42659586554c3e65707a",
  },
});
