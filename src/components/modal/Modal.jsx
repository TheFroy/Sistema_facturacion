import React, { useState } from "react";
import styles from "./modal.module.css";
import CloseSvg from "./assets/closeX.svg";

export default function Modal({ setShowModal, setFactura, factura, articulo }) {
  const [nuevoArt, setNuevoArt] = useState({
    id: Math.floor(Math.random() * (10000 - 100) + 100),
    nombre: null,
    precio: null,
    cant: null,
  });

  const agregarArtHandler = () => {
    if (!nuevoArt.cant || !nuevoArt.nombre || !nuevoArt.precio) {
      alert("Debe de completar todos los campos");
      return;
    }
    setTimeout(() => {
      alert("Artículo añadido con éxito");
      setFactura(factura.concat(nuevoArt));
      setShowModal(false);
    }, 1000);
  };

  const actualizarHandler = () => {
    const newFactura = factura.filter((art) => art.id !== articulo.id);

    setTimeout(() => {
      setFactura(newFactura.concat(nuevoArt));
      alert("Artículo se ha actualizado con éxito");
      setShowModal(false);
    }, 1000);
  };
  return (
    <>
      <div className={styles.overlay} onClick={() => setShowModal(false)}></div>
      <div className={styles.modal}>
        <header className="float-end">
          <img src={CloseSvg} alt="" onClick={() => setShowModal(false)} />
        </header>
        <div className="mt-3">
          <h3>
            {articulo ? "Actualizar " : "Agregar "}
            Articulo
          </h3>
        </div>
        <div className="container px-4">
          <div className="container my-1">
            <label htmlFor="" className="text-muted mb-1">
              Nombre de articulo
            </label>
            <input
              type="text"
              onChange={(e) => setNuevoArt({ ...nuevoArt, nombre: e.target.value })}
              value={nuevoArt.nombre}
              className="form-control col-6"
            />
          </div>
          <div className="container my-1">
            <label htmlFor="" className="text-muted mb-1">
              Precio
            </label>
            <input
              type="number"
              onChange={(e) => setNuevoArt({ ...nuevoArt, precio: e.target.value })}
              value={nuevoArt.precio}
              className="form-control col-6"
            />
          </div>
          <div className="container my-1">
            <label htmlFor="" className="text-muted mb-1">
              Cantidad
            </label>
            <input
              type="number"
              onChange={(e) => setNuevoArt({ ...nuevoArt, cant: e.target.value })}
              value={nuevoArt.cant}
              className="form-control col-6"
            />
          </div>
          <div className="container mt-3">
            <div className="row gap-2 align-items-center justify-content-center">
              <button
                className="col-5 btn btn-success"
                onClick={articulo ? actualizarHandler : agregarArtHandler}
              >
                {articulo ? "Actualizar" : "Agregar"}
              </button>
              <button className="col-5 btn btn-danger" onClick={() => setShowModal(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
