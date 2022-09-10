import React from "react";
import Search from "./Search";
import Website from "./Website";

const Nav = () => {
  return (
    <div className="">
      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex justify-start m-5">
          <label for="my-drawer" class="btn btn-primary drawer-button">
            Open drawer
          </label>
          <div className="ml-16  ">
            <Search></Search>
            <Website></Website>
          </div>
        </div>
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
