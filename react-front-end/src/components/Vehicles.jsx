import { useEffect, useState } from "react";
import Nav from "./nav";
import { Card } from "react-bootstrap";
import axios from "../api/axios";

import "./vehicles.css";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const cars = async () => {
      const res = await axios("/vehicles");
      setVehicles(res.data);
    };
    cars();
  }, [vehicles]);

  const useVehicle = vehicles.map((vehicle) => {
    return (
      <div key={vehicle.id}>
        <div className="card">
          <div key={vehicle.id}>
            <Card style={{ width: "20rem" }} key={vehicle.id}>
              <Card.Body>
                <Card.Title>Vehicle #:{vehicle.id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {vehicle.make} {vehicle.model} ({vehicle.year})
                </Card.Subtitle>
                <Card.Text>{vehicle.location_description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="main">
        <Nav />
        <div className="body">{vehicles && useVehicle}</div>
      </div>
    </>
  );
}
