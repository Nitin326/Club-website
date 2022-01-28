import React from 'react';
import Error from '../Assates/Images/Error.jpg';

const ErrorImg = {
  width: "100%",
  height: '100vh',
  backgroundImage: `url(${Error})`,
  backgroundRepeat: 'none',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}

const Errorpage = () => {
  return (
    <>
      <div style={ErrorImg}>
      </div>
    </>
  )
};

export default Errorpage;
