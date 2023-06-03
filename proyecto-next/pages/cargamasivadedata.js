import React, { useEffect } from 'react';
import Cliente from '../models/Cliente';

export default function MyPage() {
  useEffect(() => {
    async function fetchClientes() {
      const clientes = await Cliente.findAll();
      console.log(clientes);
    }

    async function insertClientes() {
      try {
        const nuevosClientes = [
          { nombre: 'Nombre del cliente 1', apellido: 'Apellido del cliente 1' },
          { nombre: 'Nombre del cliente 2', apellido: 'Apellido del cliente 2' },
          // Agregar más objetos de clientes xfa
        ];

        const resultado = await Cliente.bulkCreate(nuevosClientes);
        console.log('Clientes insertados:', resultado);
      } catch (error) {
        console.error('Error al insertar los clientes:', error);
      }
    }

    fetchClientes();
    insertClientes();
  }, []);

  return <div>...</div>;
}
