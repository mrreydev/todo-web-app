import { Link } from "react-router-dom";
import { Dropdown } from 'flowbite-react';

function Navbar () {
  return (
    <div className="flex bg-slate-100 sticky top-0 z-10">
      <div className="container py-3 flex flex-row justify-between">
        <h5 className="text-base">Todo App by <span className="text-indigo-700 font-semibold">ReyM.</span></h5>
        <div className="flex">
          <Dropdown
            inline
            label="Logged In User"
          >
            <Dropdown.Item>
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item>
              Edit Profile
            </Dropdown.Item>
            <Dropdown.Item>
              Ganti Password
            </Dropdown.Item>
            <Dropdown.Item>
              Sign out
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
