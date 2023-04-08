import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bc06612865584b088d5d49a99b99cc61",
  },
});
