import { account } from "../../../public/data/data";

export const Value = () => {
  return (
    <div className="mb-16 mt-12">
      <h1 className="text-textColor text-2xl py-8 pb-4 font-bold w-full sm:w-96">
        The value hold true to the account
      </h1>

      <div className="grid gap-10 sm:gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center">
        {account.map((list) => (
          <div
            key={list.id}
            className={`singleGrid rounded-lg hover:bg-[${list.colorBg}] p-6`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`imgDiv p-1 rounded-lg bg-[${list.colorBg}] h-10 w-10 flex items-center justify-center`}
              >
                <img src={list.icon} alt="" className="w-7/12" />
              </div>

              <span className="font-semibold text-textColor text-lg">
                {list.title}
              </span>
            </div>
            <p className="text-sm text-textColor opacity-70 py-4 font-semibold">
              {list.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
