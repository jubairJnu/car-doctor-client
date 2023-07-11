import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg';
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {})
  .catch(error => {
    console.log(error);
  })
  }

return (
  <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/sevices">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">contact</Link></li>
          {user?.email ? <li><button onClick={handleLogOut}>Log out</button></li> :
            <li><Link to="/login">Login</Link></li>
          }
        </ul>
      </div>
      <Link to="/">
        <img src={logo} alt="" className="h-12" />
      </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 text-xl font-semibold">
        <li><Link to="/">Home</Link></li>
        <li tabIndex={0}> <Link to="/about">About</Link> </li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {user?.email ? <>
          <li><Link to="/book">My Booking</Link></li>
          <li><button onClick={handleLogOut}>Log out</button></li>
        </> :
          <li><Link to="/login">Login</Link></li>
        }
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Button</a>
    </div>
  </div>
);
};

export default Header;