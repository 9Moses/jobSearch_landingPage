import { BiTimeFive } from "react-icons/bi";
import { joblist } from "../../../public/data/data";

export const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {joblist.map((items) => (
          <div
            key={items.id}
            className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
          >
            <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                {items.title}
              </h1>{" "}
              <span className="flex items-center text-[#ccc] gap-1 text-[12px]">
                <BiTimeFive /> {items.time}
              </span>
            </span>
            <h6 className="text-[#ccc]">{items.location}</h6>

            <p className="text-[14px] text-[#959595] pt-[10px] border-t-[2px] mt-[10px] group-hover:text-white">
              {items.description}
            </p>

            <div className="company flex items-center gap-2">
              <img src={items.icon} alt="" className="w-5 h-5" />
              <span className="text-[14px] py-[1rem] block group-hover:text-white">
                {items.company}
              </span>
            </div>

            <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black ">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
