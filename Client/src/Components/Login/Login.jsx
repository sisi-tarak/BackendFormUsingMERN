import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Login/Login.css";

const Login = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/login", { name, email })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-[#202227] text-[#8692a6] font-poppins p-4">
      <div className="title">
        <h2>Welcome!! 👋</h2>
        <label htmlFor="headdingtitle">Kindly fill in your details...</label>
      </div>

      <div className="bango">
        <form onSubmit={handleSubmit}>
          <div className="modex">
            <div className="row1">
              <div className="cl1">
                <label htmlFor="Name">Name of the Student*</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  id="inputs"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="cl1">
                <label htmlFor="Email">Email Address*</label>
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  id="inputs"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="ml-[50px] flex flex-col items-center gap-[10px]">
                {/* <label
                  htmlFor="Agree"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input type="checkbox" name="Agree" value="Agree" />I agree
                  and continue
                </label> */}
                <button className="bg-[#0948cf] text-white flex items-center justify-center rounded h-[60px] w-[600px] cursor-pointer hover:bg-[#0736a0] transition-colors duration-300 font-medium ">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
