import flecha from "../../assets/flecha.png";
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const ReportPage = () => {

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
        <label style={{ fontFamily:"cursive", fontSize:"22px", fontWeight:"bold", marginBottom: "20px" }}>REPORTE DE VENTAS</label>

        <div style={{ position:"fixed", marginBottom:"350px", marginLeft:"580px"  }}>
          <Button variant="danger" as={NavLink} to="/home" style={{ width: "100%" }}>
            <img style={{ width: "25px", height: "25px" }} src={flecha} alt=""/>
          </Button>
        </div>
        
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <Button
            variant="danger"
            type="submit"
            style={{
              width: "170px",
              borderRadius: "20px",
              backgroundColor: "#ff2146",
              fontWeight: "bold",
              marginTop:"100px",
              marginLeft:"80px",
              fontSize:"25px"
            }}
          >
            INFORME
            DIARIO
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
              marginTop:"100px",
              marginRight:"80px",
              fontSize:"25px"
            }}
          >
            INFORME
            MENSUAL
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
            marginTop:"60px",
            fontSize:"19px"
          }}
        >
          SOLICITAR
        </Button>
        
        
      </div>
    </div>
  );
};
