import React, { useState, useEffect } from "react";
import Articulo from "./components/articulo/Articulo";
import Modal from "../modal/Modal";
export default function Factura() {
  const [factura, setFactura] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    factura.map((articulo) => {
      var totalUnitario = parseFloat(articulo.precio) * parseFloat(articulo.cant);
      setTotal(total + totalUnitario);
    });
  }, [factura]);
  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} factura={factura} setFactura={setFactura} />}
      <div className="container-fluid mt-4">
        <div className="col-6 px-4 mb-3">
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            Agregar Producto
          </button>
        </div>
        <table class="table text-center" style={{ maxHeight: "400px", overflowY: "scroll" }}>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>
            {factura.map((articulo) => {
              return (
                <Articulo
                  key={articulo.id}
                  articulo={articulo}
                  factura={factura}
                  setFactura={setFactura}
                />
              );
            })}
          </tbody>
        </table>
        <table className="table">
          <tbody>
            {factura.length > 0 && (
              <tr className="border-bottom pt-4 float-end">
                <td className="fs-4 text font-weight-bold">
                  Total: B/. {total.toFixed(2)}{" "}
                  <button className="btn btn-success ml-2">Pagar</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
