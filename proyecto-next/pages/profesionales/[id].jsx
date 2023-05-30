import { useProID } from '@/hooks/usePro';
import { useRouter } from 'next/router';

const ProfessionalDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { profesional } = useProID(id);

  if (!profesional) {
    return <div>Cargando...</div>;
  }

  console.log(profesional)

  return (
    <div>
      {profesional.map(pro => (
        <div key={pro.id_profesional}>
          <h1>{pro.nombre}</h1>
          <h2>{pro.correo}</h2>
        </div>
        ))}
    </div>
  );
};

export default ProfessionalDetails;
