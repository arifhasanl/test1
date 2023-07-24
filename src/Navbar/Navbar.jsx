import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link to={'/contact'}>Contact Us</Link></li>
                        </ul>
                    </div>
                   <dv><h3 className="font-bold text-3xl">WEB<span className="text-orange-500">SHOFT</span> </h3></dv>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link to={'/contact'}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                {
                    user?<button><Link to={'/singIn'}>SignIn</Link></button>:
                    <button><Link to={'/singUp'}>SignUp</Link></button>
                }
                </div>
            </div>
        </div>
    );
};

export default Navbar;