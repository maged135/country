import { HiX, HiHome } from "react-icons/hi";

function Navbar() {
    return (
        <nav className="md:h-[130px] bg-slate-200 flex flex-col">
            {/* الجزء العلوي */}
            <div className="md:h-[50px] bg-indigo-900 flex flex-col md:flex-row items-center justify-center md:justify-around gap-2 md:gap-20 px-3 md:px-0 py-2 md:py-0">
                <div className="w-full md:w-[500px] flex justify-center md:justify-start">
                    <h1 className="text-white text-center md:text-left text-xs sm:text-sm md:text-base lg:text-lg">
                        know all about countries !!
                    </h1>
                </div>

                <div className="flex items-center gap-2 md:gap-0 mt-2 md:mt-0">
                    <button className="bg-red-700 h-[36px] md:h-[50px] w-24 sm:w-28 md:w-36 text-white rounded-none text-xs sm:text-sm md:text-base">
                        CHOOSE NOW
                    </button>
                    <button className="text-white bg-blue-950 h-[36px] md:h-[50px] w-10 sm:w-12 md:w-16 flex items-center justify-center">
                        <HiX size={18} className="sm:hidden md:inline" />
                        <HiX size={20} className="hidden sm:inline md:hidden" />
                    </button>
                </div>
            </div>

            {/* الجزء السفلي */}
            <div className="flex items-center justify-center h-[80px] md:h-[100px] gap-2">
                <div className="flex items-center gap-2">
                    <HiHome className="text-red-950 text-xl sm:text-2xl md:text-5xl" />
                    <div className="flex-col flex leading-tight text-center md:text-left">
                        <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-red-950">
                            BALAD
                        </h1>
                        <h1 className="text-xs sm:text-sm md:text-base">
                            city template
                        </h1>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;



