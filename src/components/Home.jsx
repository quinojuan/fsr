import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import homeCss from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <h1 className={homeCss.title}>Bienvenido a Field Service Report</h1>

      <div className={homeCss.container}>
        <Link to={"/cargarpublicador"}>
          <Button style={{ marginRight: "10px" }}>Cargar Publicador</Button>
        </Link>
        <Link to={"cargarinforme"}>
          <Button className="m">Cargar Informes</Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
