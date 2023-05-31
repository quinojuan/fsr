import { Table } from "react-bootstrap";
import useDataFetching from "./useDataFetching";

const DataDisplay = () => {
  const { data, isLoading, error } = useDataFetching(
    "http://localhost:3001/publisher/allpublishers"
  );
  return (
    <div style={{ width: "70%" }}>
      <Table bordered striped hover>
        <thead>
          <tr>
            <th
              style={{
                position: "sticky",
                top: 0,
                background: "white",
                zIndex: 1,
              }}
            >
              Nombre
            </th>
            <th
              style={{
                position: "sticky",
                top: 0,
                background: "white",
                zIndex: 1,
              }}
            >
              Apellido
            </th>
            <th
              style={{
                position: "sticky",
                top: 0,
                background: "white",
                zIndex: 1,
              }}
            >
              Grupo
            </th>
            <th
              style={{
                position: "sticky",
                top: 0,
                background: "white",
                zIndex: 1,
              }}
            >
              Fecha de bautismo
            </th>
            <th
              style={{
                position: "sticky",
                top: 0,
                background: "white",
                zIndex: 1,
              }}
            >
              Anciano
            </th>
            <th
              style={{
                position: "sticky",
                top: 0,
                background: "white",
                zIndex: 1,
              }}
            >
              Siervo Ministerial
            </th>
            <th
              style={{
                position: "sticky",
                top: 0,
                background: "white",
                zIndex: 1,
              }}
            >
              Precursor Regular
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            ({
              _id,
              name,
              lastName,
              group,
              dateOfBirth,
              elder,
              ministerialServant,
              regularPionner,
            }) => (
              <tr key={_id}>
                <td>{name}</td>
                <td>{lastName}</td>
                <td>{group}</td>
                <td>{dateOfBirth}</td>
                {/* <td>{String(elder)}</td> */}
                {/* {la linea de arriba la dejo para tener dos formas de resolver lo mismo} */}
                <td>{elder ? "SI" : ""}</td>
                <td>{ministerialServant ? "SI" : ""}</td>
                <td>{regularPionner ? "SI" : ""}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default DataDisplay;
