


const Header = () => {

    return (<>
        <div className="flex items-center justify-between w-full h-20 lg:px-8 md:px-6 px-4">
            <h1 className="text-2xl font-bold text-gray-600">Auto Ecole</h1>
            <div className="flex items-center md:space-x-8 space-x-4">
                <div className=" md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-gray-200">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>

                <nav className="hidden md:block flex-1 items-end">
                    <ul className="hidden md:flex items-center space-x-4">
                        <li>
                            <a href="#home" className="text-gray-600 hover:text-gray-800">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
                        </li>
                        <li>
                            <a href="#service" className="text-gray-600 hover:text-gray-800">Services</a>
                        </li>
                        <li>
                            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
                        </li>
                    </ul>
                </nav>

                {/* Login button */}
                <div>
                    <button className="hidden md:block bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded-full">
                        Espace membre
                    </button>
                </div>


            </div>
        </div>
    </>)
}

export default Header;