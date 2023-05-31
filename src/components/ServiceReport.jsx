import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import serviceReportCSS from "../components/ServiceReport.module.css";
import { Button } from "react-bootstrap";
import Swal from 'sweetalert2'

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
        (pub) => `${pub.lastName} ${pub.name}` === e.target.value
      );
      console.log(_id, "<<<<<<<<<<<<< soy el id")
      setId(_id);
    } else {
      setId(0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/publisher/servicereport/${id}`, report)
      .then((response) => {
        Swal.fire("Good job!", "Informe guardado correctamente!", "success")
        setReport({
          activityMonth: {
            month: "enero",
            placements: 0,
            videoShowings: 0,
            hours: 0,
            returnVisits: 0,
            bibleStudies: 0,
            remarks: "",
          },
        })
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
      <Link to={"/"}>
        <Button variant="secondary">Volver</Button>
      </Link>
      <h1>Cargar informes:</h1>

      <form action="submit" className={serviceReportCSS.form}>
        <label className={serviceReportCSS.month}>Enero</label>
        <br />
        <div className={serviceReportCSS.row}>
          <label className={serviceReportCSS.label}>Publicador</label>
          <select name="publisher" id="publisher" onChange={handlePublisher}>
            <option value={""}>Seleccione un publicador</option>
            {publishers.map((pub, idx) => (
              <option key={idx}>
                {pub.lastName} {pub.name}
              </option>
            ))}
          </select>
        </div>
        <div className={serviceReportCSS.row}>
          <label className={serviceReportCSS.label}>Publicaciones:</label>
          <input
            className={serviceReportCSS.input}
            type="text"
            name="placements"
            value={report.activityMonth.placements}
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className={serviceReportCSS.row}>
          <label className={serviceReportCSS.label}>Videos:</label>
          <input
            className={serviceReportCSS.input}
            type="text"
            name="videoShowings"
            value={report.activityMonth.videoShowings}
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className={serviceReportCSS.row}>
          <label className={serviceReportCSS.label}>Horas:</label>
          <input
            className={serviceReportCSS.input}
            type="text"
            name="hours"
            value={report.activityMonth.hours}
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className={serviceReportCSS.row}>
          <label className={serviceReportCSS.label}>Revisitas:</label>
          <input
            className={serviceReportCSS.input}
            type="text"
            name="returnVisits"
            value={report.activityMonth.returnVisits}
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className={serviceReportCSS.row}>
          <label className={serviceReportCSS.label}>Estudios:</label>
          <input
            className={serviceReportCSS.input}
            type="text"
            name="bibleStudies"
            value={report.activityMonth.bibleStudies}
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className={serviceReportCSS.row}>
          <label className={serviceReportCSS.label}>Notas:</label>
          <input
            className={serviceReportCSS.input}
            type="text"
            name="remarks"
            value={report.activityMonth.remarks}
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className={serviceReportCSS.row}>
          <Button
            variant="warning"
            className={serviceReportCSS.send}
            onClick={handleSubmit}
          >
            Enviar
          </Button>
        </div>
      </form>
    </>
  );
};

export default ServiceReport;
