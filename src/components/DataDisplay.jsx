import { Table } from "react-bootstrap";
import useDataFetching from "./useDataFetching";

const DataDisplay = () => {
  const { data, isLoading, error } = useDataFetching(
    "http://localhost:3001/publisher/allpublishers"
  );
  return (
    <Table bordered style={{
        border: "1px solid white"
    }}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Grupo</th>
          <th>Fecha de bautismo</th>
          <th>Anciano</th>
          <th>Siervo Ministerial</th>
          <th>Precursor Regular</th>
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
              <td>{dateOfBirth.split("T")[0]}</td>
              {/* <td>{String(elder)}</td> */}
              {/* {la linea de arriba la dejo para tener dos formas de resolver lo mismo} */}
              <td>{elder?"SI":""}</td>
              <td>{ministerialServant?"SI":""}</td>
              <td>{regularPionner?"SI":""}</td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
};

export default DataDisplay;
