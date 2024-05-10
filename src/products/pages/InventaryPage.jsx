import flecha from "../../assets/flecha.png";
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const InventaryPage = () => {

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
        <label style={{ fontFamily:"cursive", fontSize:"22px", fontWeight:"bold", marginBottom: "20px" }}>INVENTARIO</label>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>Producto</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Precio</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Cantidad</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Total</th>

            </tr>
          </thead>
          <tbody>
            {/* Aquí puedes insertar tus filas de datos */}
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>Empanada</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>$ 1000</td>
              <td style={{ border: "1px solid black", padding: "8px" }}> 5</td>
              <td style={{ border: "1px solid black", padding: "8px" }}> $5000</td>

            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "8px" }}>Pastel</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>$ 2000</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>4</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>$ 8000</td>

            </tr>
            {/* Añade más filas según sea necesario */}
          </tbody>
        </table>
        
        <div  style={{ position:"fixed", marginBottom:"350px", marginLeft:"580px"  }}>
          <Button variant="danger" as={NavLink} to="/home" style={{ width: "100%" }}>
            <img style={{ width: "25px", height: "25px" }} src={flecha} alt=""/>
          </Button>
        </div>

        <Button
          variant="danger"
          type="submit"
          style={{
            width: "170px",
            borderRadius: "20px",
            backgroundColor: "#ff2146",
            fontWeight: "bold",
            marginTop:"20px"
          }}
        >
          MODIFICAR
        </Button>
        
        <Button
          variant="danger"
          type="submit"
          as={NavLink}
          to="/report"
          style={{
            width: "170px",
            borderRadius: "20px",
            backgroundColor: "#ff2146",
            fontWeight: "bold",
            marginTop:"20px"
          }}
        >
          GUARDAR
        </Button>
      </div>
    </div>
  );
};
