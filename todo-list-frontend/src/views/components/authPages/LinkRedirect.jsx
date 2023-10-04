import { Link } from "react-router-dom";

export const LinkRedirect = ({ pageLink }) => {
  return (
    <h5 className="flex flex-col items-center text-sm mt-4 lg:mt-5 lg:text-base">
      {pageLink.message}{" "}
      <Link to={pageLink.navLink} className="text-name font-bold lg:mt-1">
        {pageLink.textLink}
      </Link>
    </h5>
  );
};
