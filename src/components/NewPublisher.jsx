import axios from "axios";
import { useRef, useState } from "react";

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
      .post("http://localhost:3001/publisher", datos)
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
        console.log(error);
      });
  };

  return (
    <>
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
        <br />
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
        <br />
        <label>
          Precursor Regular:
          <select name="regularPionner" id="regularPionner" onChange={handleChange}>
            <option value={""}>Seleccione una opción</option>
            <option value={false}>No</option>
            <option value={true}>Si</option>
          </select>
        </label>
        <br />
        <label>
          Anciano:
          <select name="elder" id="elder" onChange={handleChange}>
            <option value={""}>Seleccione una opción</option>
            <option value={false}>No</option>
            <option value={true}>Si</option>
          </select>
        </label>
        <br />
        <label>
          Siervo Ministerial:
          <select name="ministerialServant" id="ministerialServant" onChange={handleChange}>
            <option value={""}>Seleccione una opción</option>
            <option value={false}>No</option>
            <option value={true}>Si</option>
          </select>
        </label>
        <br />
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
        <br />
        <label>
          Esperanza:
          <select name="hope" id="hope" onChange={handleChange}>
            <option value={""}>Seleccione una opción</option>
            <option value={"Otras ovejas"}>Otras ovejas</option>
            <option value={"Ungido"}>Ungido</option>
          </select>
        </label>
        <br />
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
        <br />
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
        <br />
        <label>
          Genero:
          <select name="gender" id="gender" onChange={handleChange}>
            <option value={""}>Seleccione una opción</option>
            <option value={"Femenino"}>Femenino</option>
            <option value={"Masculino"}>Masculino</option>
          </select>
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default NewPublisher;
