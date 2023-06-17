import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
    <nav>
      <Link to="/">
         <img className="logo" src="https://media.wizards.com/2017/images/daily/41mztsnrdm.jpg" alt="Logo mtg" />
      </Link>
      <h1>
        Magic the Gathering Cards Searcher
      </h1>
    </nav>
      <Outlet />
    </>
  );
};

export default MainLayout;
