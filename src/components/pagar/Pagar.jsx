import React from "react";
import ModalGenerico from "../modaGenerico/ModalGenerico";

export default function Pagar({
  numFactura,
  numPedido,
  total,
  showModal,
  setShowModalProceso,
  setShowModalPagar,
}) {
  const metodosPago = ["Tarjeta", "Efectivo", "ACH", "Yappy"];
  return (
    <>
      {showModal && <ModalGenerico>Hola </ModalGenerico>}
      <div className="container">
        <div className="container">
          <h4 className="my-2">Factura # {numFactura}</h4>
          <h5 className="my-2  border-bottom pb-1">Número de pedido: {numPedido}</h5>
          <h5 className="my-3">Total a pagar: B/.{total.toFixed(2)}</h5>
        </div>
        <div className="my-3 border p-3 rounded">
          <h6>Método de pago</h6>
          {metodosPago.map((metodo, i) => {
            return (
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id={"flexRadioDefault" + i}
                />
                <label className="form-check-label">{metodo}</label>
              </div>
            );
          })}
        </div>

        <div className="container-fluid d-flex align-center justify-content-center">
          <button
            className="btn btn-primary"
            style={{ width: "100%", maxWidth: "300px" }}
            onClick={() => {
              setShowModalPagar(false);
              setShowModalProceso(true);
            }}
          >
            Pagar
          </button>
        </div>
      </div>
    </>
  );
}
