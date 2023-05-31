import React from "react";
import DataDisplay from "./components/DataDisplay";
import NewPublisher from "./components/NewPublisher";
import ServiceReport from "./components/ServiceReport";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cargarpublicador" element={<NewPublisher />} />
          <Route exact path="/cargarinforme" element={<ServiceReport />} />
        </Routes>
      </Router>
      {/* <DataDisplay /> */}
      {/* <NewPublisher /> */}
      {/* <ServiceReport /> */}
    </>
  );
};

export default App;
