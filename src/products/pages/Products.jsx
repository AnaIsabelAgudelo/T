import { useEffect } from 'react';
import { collection, getFirestore, getDocs } from 'firebase/firestore';
import { FirebaseApp } from '../../firebase/config'; 

export const Products = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const db = getFirestore(FirebaseApp);

        const productosRef = collection(db, 'productos');

        const querySnapshot = await getDocs(productosRef);

        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
      } catch (error) {
        console.error('Error obteniendo documentos: ', error);
      }
    };

    fetchProducts();
  }, []); 

};
