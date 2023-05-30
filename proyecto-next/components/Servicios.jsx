import { useSlug } from "@/hooks/useSlug";
import ServiciosCard from "./servicios/ServiciosCard";

const TechnicalServicesComponent = () => {
  const { slug } = useSlug();

  if (!slug) {
    return <div>Loading......</div>;
  }

  console.log(slug)

  return (
    <div className="container-servicios">
      <h1>Servicios tecnicos</h1>
      <div className='box-cartas'>
        {slug.map(cat => (
          <ServiciosCard key={cat.slug} slug={cat.slug} nombre={cat.nombre} descripcion={cat.descripcion}/>
        ))}
      </div>
    </div>
  );
};

export default TechnicalServicesComponent;