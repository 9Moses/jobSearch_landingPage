import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BsHouseDoor } from "react-icons/bs";

export const Search = () => {
  return (
    <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-6 mt-[100px] sm:p-8 md:p-12 lg:p-16 xl:p-20">
      <form action="">
        <div className="firstDiv flex flex-col sm:flex-row justify-between items-center rounded-[8px] gap-4 bg-white p-5 shadow-lg shadow-greyIsh-700">
          <div className="flex flex-row sm:flex-row gap-2 items-center w-full sm:w-auto">
            <IoSearchOutline className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full sm:w-auto"
              placeholder="Search Job Here..."
            />
            <IoMdCloseCircleOutline className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>
          <div className="flex flex-row sm:flex-row gap-2 items-center w-full sm:w-auto">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full sm:w-auto"
              placeholder="Search by companies..."
            />
            <IoMdCloseCircleOutline className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>
          <div className="flex flex-row sm:flex-row gap-2 items-center w-full sm:w-auto">
            <IoLocationOutline className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full sm:w-auto"
              placeholder="Search by location..."
            />
            <IoMdCloseCircleOutline className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>
          <button className="bg-blueColor h-full p-4 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">
            Search
          </button>
        </div>
      </form>

      <div className="secDiv flex flex-col sm:flex-row items-center gap-4 sm:gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold">
            Sort by:
          </label>
          <select
            name=""
            id="relevance"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
          </select>
        </div>
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="text-[#808080] font-semibold">
            Type:
          </label>
          <select
            name=""
            id="type"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Full-Time</option>
            <option value="">Part-Time</option>
            <option value="">Contract</option>
            <option value="">Remote</option>
          </select>
        </div>
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className="text-[#808080] font-semibold">
            Level:
          </label>
          <select
            name=""
            id="level"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advance</option>
          </select>
        </div>
        <span className="text-[#a1a1a1] cursor-pointer">Clear All </span>
      </div>
    </div>
  );
};
