import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useFetch(url) {
  const { data, error } = useSWR(url, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
