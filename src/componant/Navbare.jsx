import { NavLink } from 'react-router';

const Navbare = () => {
  const navLink = (
    <>
      <li className="hover:bg-[#F8B90C] hover:rounded-3xl  mx-2">
        <NavLink>Home</NavLink>
      </li>
      <li className="hover:bg-[#F8B90C] hover:rounded-3xl  mx-2">
        <NavLink>About Me</NavLink>
      </li>
      <li className="bg-[#F8B90C] rounded-3xl ">
        <NavLink>Say Hello</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar text-[#ffffff]">
        <div className="navbar-start flex justify-between w-full">
          <NavLink className=" text-3xl font-extrabold">
            MdParvej<span className="text-4xl text-[#F8B90C]">.</span>
          </NavLink>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 -ml-37  w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden  lg:flex">
          <ul className="menu menu-horizontal text-lg font-semibold px-1">
            {navLink}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbare;
