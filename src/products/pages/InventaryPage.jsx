import { useEffect, useState } from "react";
import {
  collection,
  getFirestore,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import flecha from "../../assets/flecha.png";
import { FirebaseApp } from "../../firebase/config";

export const InventaryPage = () => {
  const [products, setProducts] = useState([]);
  const [newQuantities, setNewQuantities] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const db = getFirestore(FirebaseApp);
        const productosRef = collection(db, "productos");
        const querySnapshot = await getDocs(productosRef);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error obteniendo documentos: ", error);
      }
    };

    fetchProducts();
  }, []);

  const handleModify = async () => {
    try {
      const db = getFirestore(FirebaseApp);
      for (const productId in newQuantities) {
        const newQuantity = newQuantities[productId];
        if (newQuantity !== undefined && newQuantity !== null) {
          const productDocRef = doc(db, "productos", productId);
          await updateDoc(productDocRef, { cantidad: newQuantity });
        }
      }
      setNewQuantities({});
    } catch (error) {
      console.error("Error modificando productos: ", error);
    }
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setNewQuantities({
      ...newQuantities,
      [productId]: newQuantity,
    });
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
          INVENTARIO
        </label>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Producto
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Precio
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Cantidad
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {product.nombre}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {product.precio}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  <Form.Control
                    type="number"
                    value={newQuantities[product.id] || ""}
                    onChange={(e) =>
                      handleQuantityChange(product.id, e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: "20px" }}>
          <Button
            variant="danger"
            type="submit"
            onClick={handleModify}
            style={{
              width: "170px",
              borderRadius: "20px",
              backgroundColor: "#ff2146",
              fontWeight: "bold",
            }}
          >
            GUARDAR
          </Button>
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
            style={{ width: "100%" }}
          >
            <img
              style={{ width: "25px", height: "25px" }}
              src={flecha}
              alt=""
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
