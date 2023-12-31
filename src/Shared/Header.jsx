import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";




const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const List = <>
        <li><Link className="hover:text-orange-500" to="/">Home</Link></li>
        <li><Link className="hover:text-orange-500" to="/AllCollages">Colleges</Link></li>
        <li><Link to="/admission">Admission</Link></li>
        <li>My College</li>
    </>


    return (
        <div className="navbar fixed z-10 max-w-[1350px] bg-gray-900 bg-opacity-40 shadow-lg text-white rounded-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black font-semibold text-lg">
                        {List}
                    </ul>
                </div>
                <a className="normal-case text-xl font-bold leading-5 p-2 ">The Good<br /><span className="text-orange-400 mr-2">Collages</span>Guide</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-6 font-semibold text-lg ">
                    {List}
                </ul>
            </div>


            <div className="navbar-end">
                <h1 className="font-bold text-xl p-4 text-orange-500" ><Link>{user?.displayName}</Link></h1>

                {
                    user ? <button onClick={handleLogOut} className="btn text-orange-500 font-bold bg-transparent border-orange-500">logout</button> : <Link to="/login"><button className="btn text-orange-500 font-bold bg-transparent border-orange-500">Login </button></Link>
                }


            </div>


        </div>

    );
};

export default Header;