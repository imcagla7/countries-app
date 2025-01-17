import useSWR from "swr";

export function useGetCountries() {
  const { data, error, isLoading } = useSWR(`https://restcountries.com/v3.1/all`);

  return {
    countries: data,
    isLoading,
    error,
  };
}
