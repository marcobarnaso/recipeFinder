import axios from "axios";

export default axios.create({
  baseURL: "https://api.edamam.com/api/recipes/v2",
  params: {
    type: "public",
    app_key: process.env.REACT_APP_EDAMAM_API_KEY,
    app_id: process.env.REACT_APP_EDAMAM_ID,
  },
});

//application id 60f52514

//Key bff97f23ce313d00cbe6f2cb9f738bc1

//url https://api.edamam.com/api/recipes/v2?type=public&q=chiken&app_id=60f52514&app_key=bff97f23ce313d00cbe6f2cb9f738bc1
