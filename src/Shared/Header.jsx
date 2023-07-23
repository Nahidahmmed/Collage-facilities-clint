


const Header = () => {
    const List = <>
        <li>Home</li>
        <li>Colleges</li>
        <li>Admission</li>
        <li>My College</li>
    </>
    return (
            <div className="navbar fixed z-10 max-w-[1350px] bg-transparent shadow-lg text-white rounded-sm">
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
                    <ul className="menu menu-horizontal gap-6 font-semibold text-lg">
                        {List}
                    </ul>
                </div>


                <div className="navbar-end">
                    profile
                </div>


            </div>

    );
};

export default Header;