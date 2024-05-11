import { Button } from "react-bootstrap";
import Logo from "../../assets/Logo.png";
import venta from "../../assets/venta.png";
import inventario from "../../assets/inventario.png";
import reporte from "../../assets/reporte.png";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <div
      style={{
        backgroundColor: "#EF1C1C",
        height: "100vh",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
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
          padding: "20px",
          borderRadius: "30px",
          textAlign: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src={Logo}
            style={{ width: "380px", height: "380px" }}
            alt="Logo"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "35px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Button
              variant="warning"
              type="submit"
              as={NavLink}
              to="/sale"
              style={{
                width: "170px",
                borderRadius: "20px",
                backgroundColor: "yellow",
              }}
            >
              <img
                src={venta}
                style={{ width: "80px", height: "80px" }}
                alt="Venta"
              />
            </Button>
            <label
              className="text-white"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "cursive",
              }}
            >
              VENTAS
            </label>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button
              variant="warning"
              type="submit"
              as={NavLink}
              to="/inventary"
              style={{
                width: "170px",
                borderRadius: "20px",
                backgroundColor: "yellow",
              }}
            >
              <img
                src={inventario}
                style={{ width: "80px", height: "80px" }}
                alt="Inventario"
              />
            </Button>
            <label
              className="text-white"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "cursive",
              }}
            >
              INVENTARIO
            </label>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button
              variant="warning"
              type="submit"
              as={NavLink}
              to="/report"
              style={{
                width: "170px",
                borderRadius: "20px",
                backgroundColor: "yellow",
              }}
            >
              <img
                src={reporte}
                style={{ width: "80px", height: "80px" }}
                alt="Reporte"
              />
            </Button>
            <label
              className="text-white"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "cursive",
              }}
            >
              INFORME
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
