import React from "react";
import trashSvg from "./assets/trashbid.svg";

export default function Articulo({
  articulo,
  factura,
  setFactura,
  setShowModal,
  setModalData,
  total,
  setTotal,
}) {
  const deleteHandler = () => {
    const newFactura = factura.filter((art) => art.id !== articulo.id);
    setFactura(newFactura);
    setTotal(total - articulo.precio * articulo.cant);
  };

  const updateHandler = () => {
    setModalData(articulo);
    setShowModal(true);
  };
  return (
    <>
      <tr>
        <th scope="row">{articulo.id}</th>
        <td>{articulo.nombre}</td>
        <td>{articulo.cant}</td>
        <td>{articulo.precio}</td>
        <td>
          <button className="btn btn-light" onClick={deleteHandler}>
            <img src={trashSvg} alt="" />
          </button>
        </td>
        <td>
          <button className="btn btn-secondary" onClick={updateHandler}>
            Editar
          </button>
        </td>
      </tr>
    </>
  );
}
