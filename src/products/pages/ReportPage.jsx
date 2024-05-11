import flecha from "../../assets/flecha.png";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { FirebaseApp } from "../../firebase/config";

export const ReportPage = () => {
  const [reportData, setReportData] = useState({
    totalEmpanadas: 0,
    totalPasteles: 0,
    totalVentas: 0,
  });
  const [showReport, setShowReport] = useState(false);
  const fetchTotalSales = async () => {
    try {
      const db = getFirestore(FirebaseApp);
      const ventasRef = collection(db, "ventas");
      const querySnapshot = await getDocs(ventasRef);
      let totalEmpanadas = 0;
      let totalPasteles = 0;
      let totalVentas = 0;

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.productosVendidos) {
          data.productosVendidos.forEach((producto) => {
            if (producto.nombre === "Empanada") {
              totalEmpanadas += producto.cantidad;
            } else if (producto.nombre === "Pastel de Pollo") {
              totalPasteles += producto.cantidad;
            }
          });
        }
        totalVentas += data.total;
      });

      setReportData({
        totalEmpanadas: totalEmpanadas,
        totalPasteles: totalPasteles,
        totalVentas: totalVentas,
      });
      setShowReport(true);
    } catch (error) {
      console.error("Error obteniendo reporte de ventas: ", error);
    }
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
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label
          style={{
            fontFamily: "cursive",
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          REPORTE DE VENTAS
        </label>

        <div
          style={{
            position: "fixed",
            marginBottom: "350px",
            marginLeft: "580px",
          }}
        >
          <Button
            variant="danger"
            onClick={fetchTotalSales}
            as={NavLink}
            to="/home"
            style={{ width: "100%" }}
          >
            <img
              style={{ width: "25px", height: "25px" }}
              src={flecha}
              alt=""
            />
          </Button>
        </div>

        {showReport && (
          <div style={{ marginTop: "20px", fontSize: "20px" }}>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid black", padding: "8px" }}>
                    Producto
                  </th>
                  <th style={{ border: "1px solid black", padding: "8px" }}>
                    Cantidad
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    Empanadas
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {reportData.totalEmpanadas}
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    Pasteles
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {reportData.totalPasteles}
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    Total
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {reportData.totalVentas}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <Button
          variant="danger"
          type="submit"
          style={{
            width: "170px",
            borderRadius: "20px",
            backgroundColor: "#ff2146",
            fontWeight: "bold",
            marginTop: "20px",
            fontSize: "19px",
          }}
          onClick={fetchTotalSales}
        >
          SOLICITAR
        </Button>
      </div>
    </div>
  );
};
