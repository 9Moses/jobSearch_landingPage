import { linkFooter } from "../../../public/data/data";

export const Footer = () => {
  return (
    <div className="footer p-10 mb-4 bg-blueColor rounded-10 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-auto items-start justify-center">
      <div className="mb-8 sm:mb-0">
        <div className="logoDiv">
          <h1 className="logo text-25 text-white pb-4">
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className="text-white pb-3 opacity-70 leading-7">
          We always make our seekers and companies find the best jobs and
          employers find the best candidates.
        </p>
      </div>

      {linkFooter.map((linksTo) => (
        <div key={linksTo.id} className="mb-8 sm:mb-0">
          <span className="diVTitle text-18 font-semibold pb-4 text-white">
            {linksTo.title}
          </span>
          <div className="grid gap-3">
            {linksTo.links.map((list) => (
              <li
                key={list.name}
                className="text-white opacity-70 hover:opacity-100"
              >
                <a href={list.link}>{list.name}</a>
              </li>
            ))}
            <div className="icon flex gap-4 py-4">{linksTo.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
