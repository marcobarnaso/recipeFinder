import axios from "axios";

export default axios.create({
  baseURL: "https://api.edamam.com/api/recipes/v2",
  params: {
    type: "public",
    app_key: process.env.REACT_APP_EDAMAM_API_KEY,
    app_id: process.env.REACT_APP_EDAMAM_ID,
  },
});
