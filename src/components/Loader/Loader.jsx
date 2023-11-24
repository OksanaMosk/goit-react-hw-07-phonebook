import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="#5a6679"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="rgb(92, 119, 151)"
      innerCircleColor="#fff"
      middleCircleColor="#a0ddf0"
    />
  );
};
export default Loader;
