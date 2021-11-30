import React, { useState } from "react";
export default function Header() {
  // eslint-disable-next-line
  const [numFactura, setNumFactura] = useState(Math.floor(Math.random() * (1000 - 100) + 100));
  // eslint-disable-next-line
  const [numPedido, setNumPedido] = useState(Math.floor(Math.random() * (1000 - 100) + 100));
  const tiempoPasado = Date.now();
  const today = new Date(tiempoPasado);
  return (
    <>
      <div className="container-fluid p-0 border-bottom ">
        <h1 className="border-bottom p-2 border-3 text-center">Sistema de Facturacion</h1>
        <div className="py-3 px-4">
          <h2>Factura</h2>
          <div className="container pt-2">
            <div className="row">
              <section className="col-6">
                <p>Empresa de Facturación S.A.</p>
                <p>Calle 5ta, David, Chiriquí</p>
              </section>
              <section className="col-6">
                <p>
                  <span>Factura #</span> {numFactura}
                </p>
                <p>
                  <span>Fecha</span> {today.toLocaleDateString()}
                </p>
                <p>
                  <span># de Pedido</span> {numPedido}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
