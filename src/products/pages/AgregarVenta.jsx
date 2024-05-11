import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { FirebaseApp } from '../../firebase/config'; 

export const AgregarVenta = async (productosVendidos, total) => {
  try {
    const db = getFirestore(FirebaseApp);
    const ventasRef = collection(db, 'ventas');

    await addDoc(ventasRef, {
      productosVendidos: productosVendidos,
      total: total,
    });

    console.log('Venta registrada correctamente.');
  } catch (error) {
    console.error('Error al registrar la venta:', error);
  }
};


