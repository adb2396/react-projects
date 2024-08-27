import React, { useState } from 'react';
import { useGetProductList } from './api';
import './styles.css';

function ProductsLoader() {
  // constants
  const MAX_LIMIT = 100;

  // hooks
  const [page, setPage] = useState(0);
  const [limit] = useState(20);

  const { data, isLoading, error } = useGetProductList(limit, page);

  // handlers
  const handleLoadMore = () => {
    setPage((prevLimit) => prevLimit + 1);
  };

  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <h2>Product List</h2>
      <div className="product-container">
        {!isLoading &&
          data.map((item) => (
            <div className="product-card">
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        {isLoading &&
          [...Array(limit)].map((item) => <div className="loading"></div>)}
      </div>
      <button
        type="button"
        onClick={handleLoadMore}
        disabled={data.length === MAX_LIMIT}
      >
        Load More
      </button>
      {data.length === MAX_LIMIT ? (
        <p>Showing all {MAX_LIMIT} products list</p>
      ) : null}
    </div>
  );
}

export default ProductsLoader;
