import { useCookies } from 'react-cookie';
import useSWR from 'swr';

function fetcher(url, token) {
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
}

function useUser() {
  const [cookies] = useCookies(['Token'])
  const { data: user, error, mutate } = useSWR('/api/user', fetcher, {
    refreshInterval: 0,
  });

  const loading = !user && !error;

  return {
    user,
    loading,
    error,
    mutate,
    isLoggedIn: Boolean(user),
  };
}

export default useUser;
