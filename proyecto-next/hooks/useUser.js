import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useUser() {
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
