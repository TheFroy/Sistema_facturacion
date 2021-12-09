import React, { useState, useEffect } from "react";
import Articulo from "./components/articulo/Articulo";
import Modal from "../modal/Modal";
import ModalGenerico from "../modaGenerico/ModalGenerico";
import Pagar from "../pagar/Pagar";
import Envio from "../procesarEnvio/Envio";

export default function Factura({ numFactura, numPedido, setNumFactura, setNumPedido }) {
  const [factura, setFactura] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalPagar, setShowModalPagar] = useState(false);
  const [showModalProceso, setShowModalProceso] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line
    factura.map((articulo) => {
      var totalUnitario = parseFloat(articulo.precio) * parseFloat(articulo.cant);
      setTotal(total + totalUnitario);
    });
    // eslint-disable-next-line
  }, [factura]);
  return (
    <>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          factura={factura}
          setFactura={setFactura}
          articulo={modalData}
        />
      )}
      {showModalPagar && (
        <ModalGenerico setShowModal={setShowModalPagar}>
          <Pagar
            numFactura={numFactura}
            numPedido={numPedido}
            total={total}
            setShowModalPagar={setShowModalPagar}
            setShowModalProceso={setShowModalProceso}
          />
        </ModalGenerico>
      )}
      {showModalProceso && (
        <ModalGenerico setShowModal={setShowModalProceso}>
          <Envio
            setFactura={setFactura}
            setShowModal={setShowModalProceso}
            setNumFactura={setNumFactura}
            setNumPedido={setNumPedido}
          />
        </ModalGenerico>
      )}

      <div className="container-fluid mt-4">
        <div className=" px-4 mb-3">
          <button
            className="btn btn-primary"
            onClick={() => {
              setShowModal(true);
              setModalData(null);
            }}
          >
            Agregar Producto
          </button>
        </div>
        <table className="table text-center" style={{ maxHeight: "400px", overflowY: "scroll" }}>
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
                  setShowModal={setShowModal}
                  setModalData={setModalData}
                  total={total}
                  setTotal={setTotal}
                />
              );
            })}
          </tbody>
        </table>
        <table className="table">
          <tbody>
            {factura.length > 0 && (
              <tr className="border-bottom pt-2 float-end">
                <td className="fs-4 text font-weight-bold">
                  Total: B/. {total.toFixed(2)}{" "}
                  <button className="btn btn-success ml-4" onClick={() => setShowModalPagar(true)}>
                    Pagar
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
