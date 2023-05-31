import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <h1>Bienvenido a Field Service Report</h1>
      <Link to={"/cargarpublicador"}>
        <Button style={{marginRight: "10px"}}>Cargar Publicador</Button>
      </Link>
      <Link to={"cargarinforme"}>
        <Button className="m">Cargar Informes</Button>
      </Link>
    </>
  );
};

export default Home;
