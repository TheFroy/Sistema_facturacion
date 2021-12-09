import { useState } from "react";
import Header from "./components/header/Header";
import Factura from "./components/factura/Factura";
import "./App.css";

function App() {
  // eslint-disable-next-line
  const [numFactura, setNumFactura] = useState(Math.floor(Math.random() * (1000 - 100) + 100));
  // eslint-disable-next-line
  const [numPedido, setNumPedido] = useState(Math.floor(Math.random() * (1000 - 100) + 100));
  return (
    <div>
      <Header numFactura={numFactura} numPedido={numPedido} />
      <Factura
        numFactura={numFactura}
        numPedido={numPedido}
        setNumFactura={setNumFactura}
        setNumPedido={setNumPedido}
      />
    </div>
  );
}

export default App;
