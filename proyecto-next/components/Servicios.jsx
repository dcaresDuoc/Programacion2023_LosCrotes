import { useSlug } from "@/hooks/useSlug";

const TechnicalServicesComponent = () => {
  const { slug } = useSlug()
  return (
    <div className="container-servicios">
      <h1>Servicios tecnicos</h1>
      
      <div className="box-cartas">
        {slug.map((service, index) => (
            <div key={index} className="cartas">
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalServicesComponent;
