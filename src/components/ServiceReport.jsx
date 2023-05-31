import { useEffect, useState } from "react";
import axios from "axios";

const ServiceReport = () => {
  const [publishers, setPublishers] = useState([]);
  const [id, setId] = useState(0);

  const [report, setReport] = useState({
    activityMonth: {
      month: "enero",
      placements: 0,
      videoShowings: 0,
      hours: 0,
      returnVisits: 0,
      bibleStudies: 0,
      remarks: "",
    },
  });

  const handleChange = (e) => {
    setReport(
      {
        ...report,
        activityMonth: {
          ...report.activityMonth,
          [e.target.name]: e.target.value,
        },
      },
      console.log(report)
    );
  };

  const handlePublisher = (e) => {
    e.preventDefault();
    if (e.target.value) {
      const [{ _id }] = publishers.filter(
        (pub) => `${pub.name} ${pub.lastName}` === e.target.value
      );
      console.log(_id, "<<<<<<<<<<<<< soy el id")
      setId(_id);
    } else {
        setId(0)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/publisher/servicereport/${id}`, report)
      .then((response) => {
        console.log("todo ok");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/publisher/allpublishers")
      .then((response) => {
        setPublishers(response.data);
      })
      .catch((error) => {
        alert("Error al obtener los publicadores");
        console.log(error);
      });
  }, []);
  return (
    <>
      <h1>Publicadores</h1>

      <form action="submit">
        <label htmlFor="">Enero</label>
        <br />
        <label htmlFor="">Publicador</label>
        <select name="publisher" id="publisher" onChange={handlePublisher}>
          <option value={""}>Seleccione un publicador</option>
          {publishers.map((pub, idx) => (
            <option key={idx}>
              {pub.name} {pub.lastName}
            </option>
          ))}
        </select>

        <label>
          Publicaciones:
          <input
            type="text"
            name="placements"
            value={report.activityMonth.placements}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <label>
          Videos:
          <input
            type="text"
            name="videoShowings"
            value={report.activityMonth.videoShowings}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <label>
          Horas:
          <input
            type="text"
            name="hours"
            value={report.activityMonth.hours}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <label>
          Revisitas:
          <input
            type="text"
            name="returnVisits"
            value={report.activityMonth.returnVisits}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <label>
          Estudios:
          <input
            type="text"
            name="bibleStudies"
            value={report.activityMonth.bibleStudies}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <label>
          Notas:
          <input
            type="text"
            name="remarks"
            value={report.activityMonth.remarks}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </>
  );
};

export default ServiceReport;
