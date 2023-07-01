import React from "react";
import Button from "../Components/Button";

function LoginPage() {
  return (
    <div className="w-screen h-[80%] flex justify-center items-center lg:px-4">
      <form
        onSubmit={e => e.preventDefault()}
        className="border bg-black rounded-lg flex flex-col items-center justify-center p-8"
      >
        <h1 className="font-semibold text-xl mb-5 text-white ">
          <span className="bg-blue-400 p-2 rounded mr-2">Sign in</span>to your
          account
        </h1>
        <label className="text-xl pb-2 text-white ">Email</label>
        <input
          type="text"
          className="h-10 px-2 border border-black rounded-md mb-4"
        />
        <label className="text-xl pb-2 text-white ">Password</label>
        <input
          type="password"
          className="h-10 px-2 border border-black rounded-md mb-5"
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
