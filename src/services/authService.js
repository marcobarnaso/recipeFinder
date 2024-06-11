import axios from "axios";

const API_URL = process.env.REACT_APP_RECIPE_FINDER_URL_DEV;

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/api/auth/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/api/auth/login`, userData);
  console.log("this is the raw response", response)
  if (!response.message) {
    console.log('this is not good')
    const authData = {
      userName: response.data.name,
      userLastName: response.data.lastName,
      userEmail: response.data.email,
      token: response.data.token,
    };
    localStorage.setItem("authData", JSON.stringify({ authData }));
    return response.data;
  }
  return {error: "Invalid email or password"}
};

export const logout = () => {
  return localStorage.removeItem("authData");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("authData");
};

export const getUser = () => {
  const authData = JSON.parse(localStorage.getItem("authData"));
  return authData ? authData.user : { error: "Not Authenticated" };
};
