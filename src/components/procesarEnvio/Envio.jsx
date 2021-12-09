import React, { useState, useEffect, useRef } from "react";
import check from "./check.svg";
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default function Envio({ setShowModal, setFactura, setNumFactura, setNumPedido }) {
  const [counter, setCounter] = useState(0);

  const textos = [
    "Enviando copia de factura al departamento de compras",
    "Enviando copia de factura - copia local",
    "Enviando copia a sección de despacho de mercancía",
    "Enviando factura al cliente",
  ];

  useInterval(() => {
    if (counter < 120) {
      setCounter(counter + 10);
    }
  }, 500);

  return (
    <>
      {counter < 120 ? (
        <>
          <div className="container-fluid p-3 mt-2">
            <h3 className="">Procesando compra</h3>
          </div>
          <div
            className="container-fluid p-2 border my-1 overflow-scroll"
            style={{ width: "600px", height: "300px" }}
          >
            <p className="my-3">
              Enviando copia de factura al departamento de compras......................
            </p>
            <p className="my-3">Enviando copia de factura - copia local......................</p>
            <p className="my-3">
              Enviando copia a sección de despacho de mercancía......................
            </p>
            <p className="my-3">Enviando factura alcliente......................</p>
          </div>
          <div className="progress my-4">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: counter + "%" }}
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="container d-flex justify-content-center mt-3"> </div>
        </>
      ) : (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center mt-2 p-2">
          <h2 className="my-4">Su compra se ha realizado con éxito</h2>
          <img src={check} className="my-5" style={{ width: "200px" }} alt="" />
          <button
            className="btn btn-success"
            onClick={() => {
              setShowModal(false);
              setFactura([]);
              setNumPedido(Math.floor(Math.random() * (1000 - 100) + 100));
              setNumFactura(Math.floor(Math.random() * (1000 - 100) + 100));
            }}
          >
            Continuar
          </button>
        </div>
      )}
    </>
  );
}
