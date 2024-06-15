import axios from "axios";

const API_URL = process.env.REACT_APP_RECIPE_FINDER_URL_DEV;

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/api/auth/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/api/auth/login`, userData);
  console.log(response._id);
  if (!response.message) {
    const authData = {
      _id: response.data._id, //-> no esta salvando el ID sin eso no se puede guardar el favorito
      userName: response.data.name,
      userLastName: response.data.lastName,
      userEmail: response.data.email,
      token: response.data.token,
    };
    localStorage.setItem("authData", JSON.stringify({ authData }));
    return response.data;
  }
  return { error: "Invalid email or password" };
};

export const logout = () => {
  return localStorage.removeItem("authData");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("authData");
};

export const getToken = () => {
  const authData = JSON.parse(localStorage.getItem("authData"));
  return authData ? authData.authData.token : {error:"Please sign in"}
};

export const getUser = () => {
  const authData = JSON.parse(localStorage.getItem("authData"));
  return authData
    ? { _id: authData.authData._id, name: authData.authData.userName }
    : { error: "Please sign in" };
};

//TODO re-render menu so when you login it shows the correct buttons
//TODO cancel button on logout modal should just close the modal and not logout
