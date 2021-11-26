import React, { useState } from "react";
import Articulo from "./components/articulo/Articulo";
export default function Factura() {
  const [factura, setFactura] = useState([]);
  return (
    <div className="container-fluid">
      <table class="table" style={{ maxHeight: "400px", overflowY: "scroll" }}>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Nombre</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          <Articulo />
          <tr className="border-bottom ">
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td className="fs-4 text font-weight-bold">Total: $$$</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
