import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AgregarVenta } from "../../products/pages/AgregarVenta";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { FirebaseApp } from "../../firebase/config";
import "../../styles/styles.css";

import empanadaImg from "../../assets/empanada.png";
import pastelImg from "../../assets/pastel.png";
import flecha from "../../assets/flecha.png";

export const SalePage = () => {
  const [empanadaCount, setEmpanadaCount] = useState(0);
  const [pastelCount, setPastelCount] = useState(0);
  const [productos, setProductos] = useState([]);
  const [ventaExitosa, setVentaExitosa] = useState(false);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const db = getFirestore(FirebaseApp);
        const productosRef = collection(db, "productos");
        const querySnapshot = await getDocs(productosRef);
        const productosData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosData);
      } catch (error) {
        console.error("Error obteniendo productos: ", error);
      }
    };

    fetchProductos();
  }, []);

  const handleEmpanadaCountChange = (count) => {
    setEmpanadaCount(count);
  };

  const handlePastelCountChange = (count) => {
    setPastelCount(count);
  };

  const calculateTotalPrice = () => {
    const empanada = productos.find(
      (producto) => producto.nombre === "Empanada"
    );
    const pastel = productos.find(
      (producto) => producto.nombre === "Pastel de Pollo"
    );

    const empanadaTotal = empanada ? empanadaCount * empanada.precio : 1000;
    const pastelTotal = pastel ? pastelCount * pastel.precio : 2000;

    return empanadaTotal + pastelTotal;
  };

  const handleFacturar = async () => {
    const productosVendidos = [
      { nombre: "Empanada", cantidad: empanadaCount },
      { nombre: "Pastel de Pollo", cantidad: pastelCount },
    ];
    const total = calculateTotalPrice();
    const fecha = new Date().toISOString();

    try {
      await AgregarVenta(productosVendidos, total, fecha);
      setVentaExitosa(true);
    } catch (error) {
      console.error("Error al agregar la venta: ", error);
    }
  };

  const handleNuevaVenta = () => {
    setEmpanadaCount(0);
    setPastelCount(0);
    setVentaExitosa(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#EF1C1C",
        minHeight: "100vh",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "yellow",
          padding: "20px",
          borderRadius: "30px",
          textAlign: "center",
          width: "50%",
          height: "70%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div>
          <label
            style={{
              fontFamily: "cursive",
              position: "absolute",
              top: "20px",
              left: "320px",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            VENTAS
          </label>
        </div>
        <div
          style={{
            position: "fixed",
            marginBottom: "350px",
            marginLeft: "580px",
          }}
        >
          <Button
            variant="danger"
            as={NavLink}
            to="/home"
            style={{ width: "100%", height: "100%" }}
          >
            <img
              style={{ width: "25px", height: "25px" }}
              src={flecha}
              alt=""
            />
          </Button>
        </div>
        <div style={{ textAlign: "left", flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "40px",
              marginTop: "20px",
            }}
          >
            {productos.map((producto) => (
              <div
                key={producto.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: "40px",
                }}
              >
                <label
                  style={{
                    fontFamily: "cursive",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {producto.nombre}
                </label>
                <img
                  src={producto.nombre === "Empanada" ? empanadaImg : pastelImg}
                  style={{ width: "100px", height: "100px", marginTop: "10px" }}
                  alt={producto.nombre}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <button
                    onClick={() =>
                      producto.nombre === "Empanada"
                        ? handleEmpanadaCountChange(empanadaCount + 1)
                        : handlePastelCountChange(pastelCount + 1)
                    }
                    className="button"
                    style={{
                      borderRadius: "20px",
                      width: "40px",
                      height: "40px",
                      marginBottom: "5px",
                      border: "1px solid black",
                      fontWeight: "bold",
                    }}
                  >
                    +
                  </button>
                  <div
                    style={{
                      marginLeft: "8px",
                      fontSize: "16px",
                      width: "40px",
                      height: "40px",
                    }}
                    className="counter-box"
                  >
                    {producto.nombre === "Empanada"
                      ? empanadaCount
                      : pastelCount}
                  </div>
                  <button
                    onClick={() =>
                      producto.nombre === "Empanada"
                        ? handleEmpanadaCountChange(
                            Math.max(empanadaCount - 1, 0)
                          )
                        : handlePastelCountChange(Math.max(pastelCount - 1, 0))
                    }
                    className="button"
                    style={{
                      borderRadius: "20px",
                      width: "40px",
                      height: "40px",
                      marginTop: "5px",
                      border: "1px solid black",
                      fontWeight: "bold",
                    }}
                  >
                    -
                  </button>
                </div>
                <input
                  type="text"
                  value={
                    "$" +
                    (producto.nombre === "Empanada"
                      ? empanadaCount * producto.precio
                      : pastelCount * producto.precio)
                  }
                  readOnly
                  style={{
                    width: "80px",
                    height: "40px",
                    textAlign: "center",
                    borderRadius: "20px",
                    border: "1px solid black",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div
            style={{
              fontFamily: "cursive",
              fontSize: "14px",
              fontWeight: "bold",
              marginBottom: "10px",
              marginLeft: "75px",
            }}
          >
            TOTAL
          </div>
          <input
            type="text"
            value={"$" + calculateTotalPrice()}
            readOnly
            style={{
              width: "120px",
              height: "40px",
              textAlign: "center",
              borderRadius: "20px",
              border: "1px solid black",
              fontWeight: "bold",
              marginLeft: "70px",
            }}
          />
        </div>
        {ventaExitosa ? (
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontFamily: "cursive",
                fontSize: "14px",
                fontWeight: "bold",
                marginTop: "200px",
              }}
            >
              Venta agregada exitosamente!
            </div>
            <Button
              variant="danger"
              type="button"
              onClick={handleNuevaVenta}
              style={{
                width: "120px",
                borderRadius: "20px",
                backgroundColor: "#ff2146",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Nueva Venta
            </Button>
          </div>
        ) : (
          <Button
            variant="danger"
            type="button"
            onClick={handleFacturar}
            style={{
              width: "170px",
              borderRadius: "20px",
              backgroundColor: "#ff2146",
              fontWeight: "bold",
              marginTop: "350px",
            }}
          >
            FACTURAR
          </Button>
        )}
      </div>
    </div>
  );
};
