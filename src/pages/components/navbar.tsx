import Link from "next/link";
import { useState } from "react";


const Navbar = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    if (modal === false) {
      setModal(true);
    } else if (modal === true) {
      setModal(false);
    }
  };
  return (
    <nav className="w-full bg-white z-0">
      <div className="mx-auto max-w-screen-xl items-center justify-between p-4">
        <div className="flex flex-row justify-between">
          <Link
            href={"/"}
            className="p-2 text-left text-3xl pt-4 items-center font-sans font-semibold text-blue-800 hover:text-blue-900"
          ><div className="flex flex-row">
            <p>W</p>
            <p className="text-black">eb</p>
            <p>S</p>
            <p className="text-black">ite</p>
            </div>
          </Link>
          <div className="flex flex-col items-end w-1/2">
            <button
              type="button"
              tabIndex={0}
              className="dropdown dropdown-end inline-block h-10 w-10 sticky top-0 rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
              onClick={handleModal}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {!modal ? (
              <div
                className="w-auto flex-row collapse md:pt-2.5 md:visible rounded-none"
              >
                <input type="text"  className="rounded-full mx-4 p-4 border border-1 border-slate-400 text-black" placeholder="Search"/>
                <Link
                  className="p-2 text-slate-800 hover:text-black"
                  href={"/topics"}
                >
                  Topics
                </Link>
                <Link
                  className="p-2 text-slate-800 hover:text-black"
                  href={"/advertise"}
                >
                  Advertise
                </Link>
                <Link
                  className="p-2 text-slate-800 hover:text-black"
                  href={"/books"}
                >
                  Books
                </Link>
                <Link
                  className="p-2 text-slate-800 hover:text-black"
                  href={"/about"}
                >
                  About Us
                </Link>  
              </div>
            ) : (
              <div
                tabIndex={0}
                className="relative py-2"
              >
                <div className="absolute z-10 flex flex-col w-40 right-0 rounded-lg border-none items-center bg-white">
                <input type="text"  className="w-32 h-10 rounded-full mx-4 p-4 border border-1 text-center border-slate-400 text-black" placeholder="Search"/>
                <Link
                  className="p-2 text-slate-800 hover:text-black"
                  href={"/topics"}
                >
                  Topics
                </Link>
                <Link
                  className="p-2 text-slate-800 hover:text-black"
                  href={"/advertise"}
                >
                  Advertise
                </Link>
                <Link
                  className="p-2 text-slate-800 hover:text-black"
                  href={"/books"}
                >
                  Books
                </Link>
                <Link
                  className="p-2 text-slate-800 hover:text-black"
                  href={"/about"}
                >
                  About Us
                </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;