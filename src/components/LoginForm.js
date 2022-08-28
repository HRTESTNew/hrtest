import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";

import { MdLockOutline } from "react-icons/md";
function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div
      className=" bg-gray-100 flex   items md:items-center lg:items-center md:justify-center lg:justify-center 
    min-h-screen  
    py-2 px-3  "
    >
      <main className="bg-gray-100 flex flex-col items-center justify-center sm:w-10 lg:w-full md:w-full sm:flex-auto flex-2 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex sm:flex-auto  lg:w-2/3 md:w-4/4 sm:w-4/4 lg:mx-w-4xl md:max-w-3xl sm:mx-w-2xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-600">HR</span> TEST
            </div>
            <div className="py-10">
              <h2 className="md:text-2xl sm:text-xl lg:text-3xl font-bold text-green-500 mb-2">
                Sign In your account
              </h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2 "></div>

              <p className="text-gray-400 my-3"> Log In to get Started</p>

              <div className="flex flex-col items-center">
                <form onSubmit={submitHandler}>
                  <div className="form-inner">
                    {error != "" ? <div className="error">{error}</div> : ""}
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex item-center  rounded-md mb-3">
                    <FaRegEnvelope className="text-gray-400 mt-0.5 mr-2" />
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="bg-gray-100 outline-none text-sm flex-1"
                        onChange={(e) =>
                          setDetails({ ...details, email: e.target.value })
                        }
                        value={details.email}
                      />
                    </div>
                  </div>

                  <div className="bg-gray-100 w-64 p-2 flex item-center  rounded-md mb-3 form-group">
                    <MdLockOutline className="text-gray-400 mt-0.5 mr-2" />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={(e) =>
                        setDetails({ ...details, password: e.target.value })
                      }
                      value={details.password}
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="flex w-64 mb-5 ml-2">
                    <label className="flex item-center text-xs form-group">
                      <input type="checkbox" name="remember" className="mr-1" />
                      Remember me
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="LOGIN"
                    className="border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
                  ></input>
                </form>
              </div>
            </div>
          </div>
          {/*jasdjkahsdjas */}

          <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="md:text-3xl sm:text-xl font-bold mb">
              Welcome to HR
            </h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">If you forget your password?</p>
            <a
              href="#"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
            >
              Forget Password
            </a>
          </div>
          {/*jasdjkahsdjas */}
        </div>
      </main>
    </div>
  );
}

export default LoginForm;
