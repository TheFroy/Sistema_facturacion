import React from "react";

export default function Articulo({ nombre, cantidad, precio }) {
  return (
    <>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>
          @mdo{"  "}
          {/* <button className="btn btn-danger ml-3">Eliminar</button> */}
        </td>
      </tr>
    </>
  );
}
