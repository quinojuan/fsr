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
    dateOfInmersed: "",
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
          dateOfInmersed: "",
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
          <input
            type="text"
            name="regularPionner"
            value={datos.regularPionner ? "SI" : "NO"}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Anciano:
          <input
            type="text"
            name="elder"
            value={datos.elder ? "SI" : "NO"}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Siervo Ministerial:
          <input
            type="text"
            name="ministerialServant"
            value={datos.ministerialServant ? "SI" : "NO"}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Grupo:
          <input
            type="text"
            name="group"
            value={datos.group}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Esperanza:
          <select name="hope" id="hope" onChange={handleChange}>
            <option value={""}></option>
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
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Fecha de bautismo:
          <input
            type="text"
            name="dateOfInmersed"
            value={datos.dateOfInmersed}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Genero:
          <input
            type="text"
            name="gender"
            value={datos.gender}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default NewPublisher;
