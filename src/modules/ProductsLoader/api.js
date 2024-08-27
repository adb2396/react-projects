import { useCallback, useEffect, useState } from 'react';

export function useGetProductList(limit, skip) {
  // state
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // api call
  const fetchProducts = useCallback(
    async function () {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip === 0 ? 0 : limit * skip}`
        );
        const json = await response.json();
        setData((prevData) =>
          limit * skip >= prevData.length
            ? [...prevData, ...json.products]
            : prevData
        );
        setIsLoading(false);
      } catch (error) {
        setError(`Something went wrong!`, error);
        setIsLoading(false);
      }
    },
    [limit, skip]
  );

  // useEffect
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // return
  return { data, isLoading, error };
}
