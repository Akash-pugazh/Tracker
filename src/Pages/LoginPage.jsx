import React, { useState } from "react";
import Button from "../Components/Button";
import { updateDetails } from "../features/Users/UserSlice";
import { useDispatch, useSelector } from "react-redux";

function LoginPage() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
  });

  const { loggedIn } = useSelector(state => state.user);
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    const { name, email } = details;
    dispatch(updateDetails(name, email));
    setDetails({ ...details, name: "", email: "" });
  }

  if (loggedIn) return <div className="h-[90%] flex justify-center items-center text-base">You are Successfully Logged In ✅ </div>;

  return (
    <div className="w-screen h-[80%] flex justify-center items-center lg:px-4">
      <form
        onSubmit={handleSubmit}
        className="border bg-black rounded-lg flex flex-col items-center justify-center p-8"
      >
        <h1 className="font-semibold text-xl mb-5 text-white ">
          <span className="bg-blue-400 p-2 rounded mr-2">Sign in</span>to your
          account
        </h1>
        <label className="text-xl pb-2 text-white ">Full Name</label>
        <input
          type="text"
          className="h-10 px-2 border border-black rounded-md mb-4"
          onChange={e => setDetails({ ...details, name: e.target.value })}
        />
        <label className="text-xl pb-2 text-white ">Email</label>
        <input
          type="email"
          className="h-10 px-2 border border-black rounded-md mb-5"
          onChange={e => setDetails({ ...details, email: e.target.value })}
        />
        <Button
          value="Login"
          className="text-white text-center cursor-pointer border-white border hover:bg-white hover:text-black transition-all duration-200 ease-in-out lg:w-[15%] rounded px-10"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
