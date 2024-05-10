import { useState } from 'react';
import '../../styles/styles.css'; 

import empanada from "../../assets/empanada.png";
import pastel from "../../assets/pastel.png";
import flecha from "../../assets/flecha.png"
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const SalePage = () => {
  const [empanadaCount, setEmpanadaCount] = useState(0); 
  const [pastelCount, setPastelCount] = useState(0); 
  const empanadaPriceCOP = 1000;
  const pastelPriceCOP = 2000; 

  const handleEmpanadaCountChange = (count) => {
    setEmpanadaCount(count);
  };

  const handlePastelCountChange = (count) => {
    setPastelCount(count);
  };

  const calculateTotalPrice = () => {
    const empanadaTotal = empanadaCount * empanadaPriceCOP;
    const pastelTotal = pastelCount * pastelPriceCOP;
    return empanadaTotal + pastelTotal;
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
          <label style={{ fontFamily:"cursive", position: "absolute", top: "20px", left:"320px", fontSize:"22px", fontWeight:"bold"}}>VENTAS</label>
        </div>
         <div style={{ position:"fixed", marginBottom:"350px", marginLeft:"580px"  }}>
        <Button variant="danger" as={NavLink}to="/home" style={{ width: "100%", height: "100%" }}>
          <img style={{ width: "25px", height: "25px" }} src={flecha} alt=""/>
        </Button>
      </div>
        <div style={{ textAlign: "left", flex: 1 }}> 
          <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", marginLeft: "40px", marginTop:"20px"}}>
            <label style={{ fontFamily:"cursive", position: "absolute", top: "58px", left:"70px", fontSize:"14px", fontWeight:"bold"}}>EMPANADA</label>
            <img src={empanada} style={{ width: "100px", height: "100px", marginRight: "40px" }} alt="Empanada" />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "40px", height: "120px", justifyContent: "space-between" }}>
              <button onClick={() => handleEmpanadaCountChange(empanadaCount + 1)} className="button" style={{ borderRadius: "20px", width: "40px", height: "40px", marginBottom: "5px", border: "1px solid black", fontWeight:"bold"  }}>+</button>
              <div style={{marginLeft: "8px", fontSize: "16px", width: "40px", height: "40px"}} className="counter-box">{empanadaCount}</div>
              <button onClick={() => handleEmpanadaCountChange(Math.max(empanadaCount - 1, 0))} className="button" style={{ borderRadius: "20px", width: "40px", height: "40px", marginTop: "5px", border: "1px solid black", fontWeight:"bold"  }}>-</button>
            </div>
            <input
              type="text"
              value={"$" + (empanadaCount * empanadaPriceCOP)}
              readOnly
              style={{
                width: "80px",
                height: "40px",
                textAlign: "center",
                borderRadius: "20px",
                border: "1px solid black",
                fontWeight: "bold",
                marginLeft: "40px",
              }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", marginLeft: "40px", marginTop:"40px" }}>
            <label style={{fontFamily:"cursive", position: "absolute", top: "220px", left:"46px", fontSize:"14px", fontWeight:"bold" }}>PASTEL DE POLLO</label>
            <img src={pastel} style={{ width: "100px", height: "100px", marginRight: "40px" }} alt="Pastel" />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "40px", height: "120px", justifyContent: "space-between" }}>
              <button onClick={() => handlePastelCountChange(pastelCount + 1)} className="button" style={{ borderRadius: "20px", width: "40px", height: "40px", marginBottom: "5px", border: "1px solid black", fontWeight:"bold" }}>+</button>
              <div style={{marginLeft: "8px", fontSize: "16px", width: "40px", height: "40px"}} className="counter-box">{pastelCount}</div>
              <button onClick={() => handlePastelCountChange(Math.max(pastelCount - 1, 0))} className="button" style={{ borderRadius: "20px", width: "40px", height: "40px", marginTop: "5px", border: "1px solid black", fontWeight:"bold"  }}>-</button>
            </div>
            <input
              type="text"
              value={"$" + (pastelCount * pastelPriceCOP)}
              readOnly
              style={{
                width: "80px",
                height: "40px",
                textAlign: "center",
                borderRadius: "20px",
                border: "1px solid black",
                fontWeight: "bold",
                marginLeft: "40px",
              }}
            />
          </div>
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontFamily:"cursive", fontSize:"14px", fontWeight:"bold", marginBottom: "10px", marginLeft:"75px"}}>TOTAL</div>
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
              marginLeft:"70px"
            }}
          />
        </div>
        <Button
              variant="danger"
              type="submit"
              as={NavLink}
              to="/inventary"
              style={{
                width: "170px",
                borderRadius: "20px",
                backgroundColor: "#ff2146",
                fontWeight: "bold",
                marginTop:"350px"
              }}
            >
              FACTURAR
            </Button>

      </div>
    </div>
  );
};

