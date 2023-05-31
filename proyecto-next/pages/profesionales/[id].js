import { useProID } from '@/hooks/usePro';
import { useRouter } from 'next/router';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


const professionalDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { profesional } = useProID(id);

  if (!profesional) {
    return (
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
    );
  }

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

export default professionalDetails;
