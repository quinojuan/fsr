import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles/NewPublisher.module.css"

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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Enviar los datos a la API
    axios
      .post("http://192.168.1.73:3001/publisher", datos)
      .then((response) => {
        alert("Publicador agregado exitosamente");
        console.log(response.data);
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
      })
      .catch((error) => {
        alert("Error al agregar el nuevo publicador!");
        alert(error)
        console.log(error);
      });
  };

  return (
    <>
<Link to={"/"}>
    <Button variant="secondary">Volver</Button>
</Link>
<h1>Cargar publicador:</h1>
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            ref={inputNameRef}
            value={datos.name}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <label>
          Apellido:
          <input
            type="text"
            name="lastName"
            value={datos.lastName}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <label>
          Precursor Regular:
          <select name="regularPionner" id="regularPionner" onChange={handleChange}>
            <option value={""}>Seleccione una opción</option>
            <option value={false}>No</option>
            <option value={true}>Si</option>
          </select>
        </label>
        <label>
          Anciano:
          <select name="elder" id="elder" onChange={handleChange}>
            <option value={""}>Seleccione una opción</option>
            <option value={false}>No</option>
            <option value={true}>Si</option>
          </select>
        </label>
        <label>
          Siervo Ministerial:
          <select name="ministerialServant" id="ministerialServant" onChange={handleChange}>
            <option value={""}>Seleccione una opción</option>
            <option value={false}>No</option>
            <option value={true}>Si</option>
          </select>
        </label>
        <label>
          Grupo:
          <select name="group" id="group" onChange={handleChange}>
            <option value={""}>Seleccione una opción</option>
            <option value={1}>Grupo 1</option>
            <option value={2}>Grupo 2</option>
            <option value={3}>Grupo 3</option>
            <option value={4}>Grupo 4</option>
          </select>
        </label>
        <label>
          Esperanza:
          <select name="hope" id="hope" onChange={handleChange}>
            <option value={""}>Seleccione una opción</option>
            <option value={"Otras ovejas"}>Otras ovejas</option>
            <option value={"Ungido"}>Ungido</option>
          </select>
        </label>
        <label>
          Fecha de nacimiento:
          <input
            type="text"
            name="dateOfBirth"
            value={datos.dateOfBirth}
            // autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <label>
          Fecha de bautismo:
          <input
            type="text"
            name="dateInmersed"
            value={datos.dateInmersed}
            // autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <label>
          Genero:
          <select name="gender" id="gender" onChange={handleChange}>
            <option value={""}>Seleccione una opción</option>
            <option value={"Femenino"}>Femenino</option>
            <option value={"Masculino"}>Masculino</option>
          </select>
        </label>
        <Button variant="warning">Enviar</Button>
      </form>
    </div>
    </>
  );
};

export default NewPublisher;
