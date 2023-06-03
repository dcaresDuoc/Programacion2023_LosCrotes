import React, { useEffect } from 'react';
import Cliente from '../models/Cliente';

export default function MyPage() {
  useEffect(() => {
    // Ejemplo de consulta utilizando Sequelize
    async function fetchClientes() {
      const clientes = await Cliente.findAll();
      console.log(clientes);
    }

    // Ejemplo de inserción utilizando Sequelize
    async function insertCliente() {
      try {
        const nuevoCliente = await Cliente.create({
          nombre: 'Nombre del cliente',
          apellido: 'Apellido del cliente',
          // Aquí añadir campos y valores
        });
        console.log('Cliente insertado:', nuevoCliente);
      } catch (error) {
        console.error('Error al insertar el cliente:', error);
      }
    }

    fetchClientes();
    insertCliente();
  }, []);

  return <div>...</div>;
}
