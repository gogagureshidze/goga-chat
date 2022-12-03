import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Chats from "../components/Chats";
function Sidebar() {
  return (
    <div className="sidebar">
      <Navbar></Navbar>
      <Search></Search>
      <Chats></Chats>
    </div>
  );
}

export default Sidebar;
