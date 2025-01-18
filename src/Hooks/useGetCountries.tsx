import useSWR from "swr";

export function useGetCountries({ name }: { name: string }) {
  const url = name
    ? `https://restcountries.com/v3.1/name/${name}`
    : `https://restcountries.com/v3.1/all`;

  const { data, error, isLoading } = useSWR(url);

  return {
    countries: data ?? [],
    isLoading,
    error,
  };
}
