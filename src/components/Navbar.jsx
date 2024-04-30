import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-700">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </div>
        {/* <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="/">
              Home
            </a>
          </li>
        </ul> */}
        <button className="text-white bg-green-700  rounded-lg flex justify-between items-center font-bold py-2 px-5 ring-white ring-1">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
