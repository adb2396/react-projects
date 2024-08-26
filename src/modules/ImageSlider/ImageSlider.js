import { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { useGetImages } from './api';
import './style.css';

function ImageSlider() {
  // constants
  const URL = 'https://picsum.photos/v2/list?page=10&limit=10';

  // state
  const [currImgIdx, setCurrImgIdx] = useState(0);

  // hooks
  const { isLoading, data, error } = useGetImages(URL);

  // handlers
  const handleLeftClick = () => {
    setCurrImgIdx((idx) => (idx > 0 ? idx - 1 : data.length - 1));
  };

  // handlers
  const handleRightClick = () =>
    setCurrImgIdx((idx) => (idx + 1) % data.length);

  const handleDotClick = (idx) => setCurrImgIdx(idx);

  // return statement
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="slider">
      <div className="image-container">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={handleLeftClick}
        />
        {data.map((image, index) => (
          <img
            src={image.download_url}
            alt={image.author}
            className={
              currImgIdx === index
                ? 'image image-active'
                : 'image image-inactive'
            }
          />
        ))}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={handleRightClick}
        />
      </div>
      <div className="dot-container">
        {data.map((_, index) => (
          <div
            className={currImgIdx === index ? 'dot active' : 'dot'}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
