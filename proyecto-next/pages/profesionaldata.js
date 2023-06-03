import React, { useEffect } from 'react';
import Profesional from '../models/Profesional';

export default function MyPage() {
  useEffect(() => {
    // Ejemplo de consulta utilizando Sequelize
    async function fetchProfesionales() {
      const profesionales = await Profesional.findAll();
      console.log(profesionales);
    }

    // Ejemplo de inserción utilizando Sequelize
    async function insertProfesional() {
      try {
        const nuevoProfesional = await Profesional.create({
          nombre: 'Nombre del profesional',
          especialidad: 'Especialidad del profesional',
          // Aquí añadir campos y valores
        });
        console.log('Profesional insertado:', nuevoProfesional);
      } catch (error) {
        console.error('Error al insertar el profesional:', error);
      }
    }

    fetchProfesionales();
    insertProfesional();
  }, []);

  return <div>...</div>;
}
