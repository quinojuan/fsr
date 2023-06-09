import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles/NewPublisher.module.css";
import newPublisherCss from "../styles/NewPublisher.module.css";
import Swal from "sweetalert2";

const NewPublisher = () => {
  const [datos, setDatos] = useState({
    lastName: "",
    name: "",
    regularPionner: false,
    elder: false,
    ministerialServant: false,
    group: "",
    hope: "",
    dateOfBirth: "",
    dateInmersed: "",
    gender: "",
  });

  const inputNameRef = useRef(null); // genero una referencia para poder focalizar el cursor luego del envio del form.

  const handleChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
    console.log(datos);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Enviar los datos a la API
    try {
      await axios.post("http://localhost:3001/publisher", datos);

      Swal.fire("Bien", "Publicador agregado correctamente", "success");
      setDatos({
        lastName: "",
        name: "",
        regularPionner: false,
        elder: false,
        ministerialServant: false,
        group: "",
        hope: "",
        dateOfBirth: "",
        dateInmersed: "",
        gender: "",
      });
      inputNameRef.current.focus();
    } catch (error) {
      alert("Error al agregar el nuevo publicador!");
      alert(error);
      console.log(error);
    }
  };

  return (
    <>
      <Link to={"/"}>
        <Button variant="secondary">Volver</Button>
      </Link>
      <h3>Nuevo publicador:</h3>
      <div className="container-form">
        <form onSubmit={handleSubmit}>
          <div className={newPublisherCss.row}>
            <label className={newPublisherCss.label}>Nombre:</label>
            <input
              className={newPublisherCss.input}
              type="text"
              name="name"
              ref={inputNameRef}
              value={datos.name}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <div className={newPublisherCss.row}>
            <label className={newPublisherCss.label}>Apellido:</label>
            <input
              className={newPublisherCss.input}
              type="text"
              name="lastName"
              value={datos.lastName}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <div className={newPublisherCss.row}>
            <label className={newPublisherCss.label}>Precursor Regular:</label>
            <select
              className={newPublisherCss.input}
              value={datos.regularPionner}
              name="regularPionner"
              id="regularPionner"
              onChange={handleChange}
            >
              <option value={""}>Seleccione una opción</option>
              <option value={false}>No</option>
              <option value={true}>Si</option>
            </select>
          </div>

          <div className={newPublisherCss.row}>
            <label className={newPublisherCss.label}>Anciano:</label>
            <select
              className={newPublisherCss.input}
              name="elder"
              value={datos.elder}
              id="elder"
              onChange={handleChange}
            >
              <option value={""}>Seleccione una opción</option>
              <option value={false}>No</option>
              <option value={true}>Si</option>
            </select>
          </div>

          <div className={newPublisherCss.row}>
            <label className={newPublisherCss.label}>Siervo Ministerial:</label>
            <select
              className={newPublisherCss.input}
              name="ministerialServant"
              value={datos.ministerialServant}
              id="ministerialServant"
              onChange={handleChange}
            >
              <option value={""}>Seleccione una opción</option>
              <option value={false}>No</option>
              <option value={true}>Si</option>
            </select>
          </div>

          <div className={newPublisherCss.row}>
            <label className={newPublisherCss.label}>Grupo:</label>
            <select
              className={newPublisherCss.input}
              name="group"
              value={datos.group}
              id="group"
              onChange={handleChange}
            >
              <option value={""}>Seleccione una opción</option>
              <option value={1}>Grupo 1</option>
              <option value={2}>Grupo 2</option>
              <option value={3}>Grupo 3</option>
              <option value={4}>Grupo 4</option>
            </select>
          </div>

          <div className={newPublisherCss.row}>
            <label className={newPublisherCss.label}>Esperanza:</label>
            <select
              className={newPublisherCss.input}
              name="hope"
              value={datos.hope}
              id="hope"
              onChange={handleChange}
            >
              <option value={""}>Seleccione una opción</option>
              <option value={"Otras ovejas"}>Otras ovejas</option>
              <option value={"Ungido"}>Ungido</option>
            </select>
          </div>

          <div className={newPublisherCss.row}>
            <label className={newPublisherCss.label}>
              Fecha de nacimiento:
            </label>
            <input
              className={newPublisherCss.input}
              type="text"
              name="dateOfBirth"
              value={datos.dateOfBirth}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <div className={newPublisherCss.row}>
            <label className={newPublisherCss.label}>Fecha de bautismo:</label>
            <input
              className={newPublisherCss.input}
              type="text"
              name="dateInmersed"
              value={datos.dateInmersed}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className={newPublisherCss.row}>
            <label className={newPublisherCss.label}>Genero:</label>
            <select
              className={newPublisherCss.input}
              name="gender"
              value={datos.gender}
              id="gender"
              onChange={handleChange}
            >
              <option value={""}>Seleccione una opción</option>
              <option value={"Femenino"}>Femenino</option>
              <option value={"Masculino"}>Masculino</option>
            </select>
          </div>

          <Button onClick={handleSubmit} variant="warning">
            Enviar
          </Button>
        </form>
      </div>
    </>
  );
};

export default NewPublisher;
