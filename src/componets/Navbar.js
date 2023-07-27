import { useNavigate } from "react-router-dom";
import { Dropdown } from 'flowbite-react';
import { useSelector, useDispatch } from "react-redux";
import { setLoggedInUser, resetLoggedInUser } from "../features/authSlice";

import { useEffect } from "react";
import { getLoggedInUser } from "../services/Auth";

function Navbar () {
  const navigate = useNavigate();
  const loggedInUser = useSelector(state => state.auth.loggedInUser);
  const dispatch = useDispatch();

  const loggedInExist = !!(loggedInUser && Object.keys(loggedInUser).length);

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    try {
      const respUser = await getLoggedInUser();
      localStorage.setItem('userInfo', JSON.stringify(respUser.data));

      dispatch(setLoggedInUser());
      navigate('/home');
    } catch (error) {
      localStorage.clear();
      resetLoggedInUser()
      navigate('/');
    }
  }

  const handleLogout = () => {
    localStorage.clear();
    dispatch(resetLoggedInUser());
    navigate('/');
  }

  const handleNavigate = (url) => {
    navigate(url);
  }

  return (
    <div className="flex bg-slate-100 sticky top-0 z-10">
      <div className="container py-3 flex flex-row justify-between">
        <h5 className="text-base">Todo App by <span className="text-indigo-700 font-semibold">ReyM.</span></h5>
        <div className="flex">
          {
            loggedInExist &&
            <Dropdown
              inline
              label={ loggedInUser.name }
            >
              <Dropdown.Item onClick={() => { handleNavigate('/home') }}>
                Dashboard
              </Dropdown.Item>
              <Dropdown.Item>
                Edit Profile
              </Dropdown.Item>
              <Dropdown.Item>
                Ganti Password
              </Dropdown.Item>
              <Dropdown.Item onClick={() => { handleLogout() }}>
                Logout
              </Dropdown.Item>
            </Dropdown>
          }

        </div>
      </div>
    </div>
  );
}

export default Navbar;
