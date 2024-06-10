import { useState, useEffect } from "react";
import { menulists } from "../../../public/data/data";
import { IoClose, IoMenu, IoArrowUp } from "react-icons/io5";

export const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar fixed top-0 left-0 w-full z-20 bg-white flex justify-between items-center p-[2rem] shadow-md">
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-blueColor">
            <strong>Job</strong>Search
          </h1>
        </div>

        <div className="menu flex gap-8">
          {menulists.map((menu) => (
            <ul key={menu.id} className="sm:flex hidden">
              <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                <a href={menu.path}>{menu.link}</a>
              </li>
            </ul>
          ))}
        </div>

        {/* Mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <div
            onClick={() => setToggle((prev) => !prev)}
            className="cursor-pointer"
          >
            {toggle ? <IoClose size={24} /> : <IoMenu size={24} />}
          </div>

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-white fixed flex flex-col top-[4rem] right-0 w-full z-10 `}
          >
            {menulists.map((menu) => (
              <ul
                key={menu.id}
                className="list-none flex flex-col gap-2 py-2 items-center"
              >
                <li className="menuList text-[#6f6f6f] hover:text-blueColor cursor-pointer text-[16px] list_style w-full">
                  <a href={menu.path}>{menu.link}</a>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </nav>

      {showArrow && (
        <div
          className="fixed bottom-8 right-8 z-30 cursor-pointer p-2 bg-blueColor text-white rounded-full  hover:bg-blue-300"
          onClick={scrollToTop}
        >
          <IoArrowUp size={24} />
        </div>
      )}
    </>
  );
};
