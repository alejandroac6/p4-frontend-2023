import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const MainLayout = () => {
  // Layout principal de la App, contiene una barra de navagacion con el boton de inicio
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
