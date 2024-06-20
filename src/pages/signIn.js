import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../services/authService";
import MultiModal from "../components/Modal";
import { AuthContext } from "../context/authContext";

const Authentication = () => {
  const {isAuthenticated, loginContext}=useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    authData: { userName: "", lastName: "" },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      console.log("User logged in", response);
    } catch (err) {
      handleErrorSignIn();
    }
    const storedData = JSON.parse(localStorage.getItem("authData"));
    setUserData(storedData);
    setModalOpen(true);
    loginContext(storedData)
  };

  const handleErrorSignIn = () => {
    setModalOpen(true);
  };
  return (
    <>
      <div className="ui placeholder segment">
        <div className="ui two column very relaxed stackable grid">
          <div className="column">
            <div className="ui form">
              <div className="field">
                <label>Email</label>
                <div className="ui left icon input">
                  <input
                    type="text"
                    placeholder="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <i className="user icon"></i>
                </div>
              </div>
              <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <i className="lock icon"></i>
                </div>
              </div>
              <div className="ui blue submit button" onClick={handleSubmit}>
                Login
              </div>
            </div>
          </div>
          <div className="middle aligned column">
            <Link to="/signup">
              <div className="ui big button">
                <i className="signup icon"></i>
                Sign Up
              </div>
            </Link>
          </div>
        </div>
        <div className="ui vertical divider">Or</div>
      </div>
      <MultiModal
        pHeader={
          userData
            ? `Welcome ${userData.authData.userName}`
            : "Invalid email or Password"
        }
        pContent={
          userData ? "Now you can click on the hearts on the recipes to add them to favorites." : "Please try again"
        }
        pRedirect={userData ? "/" : "/authentication"}
        pModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
};

export default Authentication;
