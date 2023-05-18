import React from "react";

const TechnicalServicesComponent = () => {
    const technicalServices = [
        {
          title: "Mantenimiento de hardware",
          description:
            "Reparación y mantenimiento de computadoras, laptops, impresoras y otros dispositivos de hardware.",
        },
        {
          title: "Soporte de software",
          description:
            "Instalación, configuración y resolución de problemas relacionados con software y aplicaciones.",
        },
        {
          title: "Recuperación de datos",
          description:
            "Recuperación de datos perdidos o dañados de dispositivos de almacenamiento como discos duros y tarjetas de memoria.",
        },
        {
          title: "Soporte de redes",
          description:
            "Configuración y resolución de problemas relacionados con redes locales (LAN) y redes inalámbricas (WLAN).",
        },
        {
          title: "Servicios de ciberseguridad",
          description:
            "Implementación de medidas de seguridad para proteger sistemas y datos contra amenazas cibernéticas.",
        },
        {
          title: "Soporte técnico remoto",
          description:
            "Asistencia técnica a través de conexiones remotas para solucionar problemas y brindar orientación.",
        },
      ];
      

  return (
    <div className="container-servicios">
      <h1>Servicios tecnicos</h1>
      
      <div className="box-cartas">
        {technicalServices.map((service, index) => (
            <div key={index} className="cartas">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalServicesComponent;
